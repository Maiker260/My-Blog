import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogComments from "../components/Blog/blog-editor/BlogComments.jsx";
import BlogContent from "../components/Blog/blog-editor/BlogContent.jsx";
import BlogTitle from "../components/Blog/blog-editor/BlogTitle.jsx";
import TagsContainer from "../components/Blog/blog-editor/TagsContainer.jsx";
import SubmitBtn from "../components/SubmitBtn.jsx";
import handleSubmit from "../services/handleSubmit.js";
import { getPost } from "../services/blog/get-post.js";
import { getUserTags } from "../services/tag/get-user-tags.js";
import Loading from "../components/Loading.jsx";
import formatDate from "../utils/format-date.js";
import LoadingBanner from "../components/LoadingBanner.jsx";

function BlogEditor() {
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);
    const [date, setDate] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tags = await getUserTags();
                setAvailableTags(tags.map((tag) => tag.name) || []);

                if (id) {
                    // const data = await getPost(userId, postiId);
                    const data = await getPost(id);

                    setEditMode(true);
                    setSelectedTags(data.tags.map((tag) => tag.name) || []);

                    setTitle(data.title);
                    setContent(data.content);
                    setComments(data.comments || []);
                    setDate({
                        created: data.createdAt,
                        updated: data.updatedAt,
                    });
                } else {
                    setEditMode(false);
                    setSelectedTags([]);

                    setTitle("");
                    setContent("");
                    setComments([]);
                }
            } catch (err) {
                console.error("Failed to load data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const resetForm = () => {
        setTitle("");
        setSelectedTags([]);
        setContent("");
    };

    if (loading) {
        return <Loading message={"Loading Post Data"} />;
    }

    return (
        <form
            onSubmit={async (e) => {
                setSubmitting(true);
                try {
                    await handleSubmit(e, {
                        id,
                        title,
                        selectedTags,
                        content,
                        reset: resetForm,
                        navigate,
                    });
                } finally {
                    setSubmitting(false);
                }
            }}
            className="text-neutral-800 flex flex-col gap-13 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded"
        >
            <LoadingBanner show={submitting} message="Saving blog post..." />

            <h1 className="text-5xl font-bold text-center">
                {editMode ? "Edit" : "New"} Blog Post
            </h1>
            {editMode ? (
                <div>
                    <p>
                        <span className="font-bold"> Created: </span>
                        <span className="text-sm text-gray-500">
                            {formatDate(date.created, true)}
                        </span>
                    </p>
                    <p>
                        <span className="font-bold"> Last Update: </span>
                        <span className="text-sm text-gray-500">
                            {formatDate(date.updated, true)}
                        </span>
                    </p>
                </div>
            ) : null}
            <TagsContainer
                availableTags={availableTags}
                selectedTags={selectedTags}
                onChange={setSelectedTags}
            />
            <BlogTitle
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <section className="flex flex-col">
                <h2 className="text-3xl font-bold mb-4">Content:</h2>
                <BlogContent value={content} onChange={setContent} />
            </section>
            <SubmitBtn message={"Save Blog"} />
            {editMode ? <BlogComments comments={comments} /> : null}
        </form>
    );
}

export default BlogEditor;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogComments from "../components/Blog/blog-editor/BlogComments.jsx";
import BlogContent from "../components/Blog/blog-editor/BlogContent.jsx";
import BlogTitle from "../components/Blog/blog-editor/BlogTitle.jsx";
import TagsContainer from "../components/Blog/blog-editor/TagsContainer.jsx";
import SubmitBtn from "../components/SubmitBtn.jsx";
import handleSubmit from "../services/handleSubmit.js";

function BlogEditor() {
    // NEED TO REPLACE AFTER FETCHING THE DATA
    const availableTags = [
        "HTML",
        "CSS",
        "TAILWIND",
        "JS",
        "REACT",
        "TYPESCRIPT",
    ];

    const [title, setTitle] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const dummyComments = [
            {
                id: 1,
                author: "Author",
                date: "11 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 2,
                author: "Author",
                date: "12 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 3,
                author: "Author",
                date: "13 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 4,
                author: "Author",
                date: "14 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 5,
                author: "Author",
                date: "15 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 6,
                author: "Author",
                date: "16 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 7,
                author: "Author",
                date: "17 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
            {
                id: 8,
                author: "Author",
                date: "18 Aug 2024",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            },
        ];

        if (id) {
            // NEED TO GRAB THE POST INFORMATION
            setTitle(`Testing ${id}`);
            setContent(`Testing ${id}`);
            setComments(dummyComments);
            setEditMode(true);
        } else {
            setTitle("");
            setContent("");
            setComments([]);
            setEditMode(false);
        }
    }, [id]);

    const resetForm = () => {
        setTitle("");
        setSelectedTags([]);
        setContent("");
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e, {
                    title,
                    selectedTags,
                    content,
                    reset: resetForm,
                    navigate,
                });
            }}
            className="text-neutral-800 flex flex-col gap-13 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded"
        >
            <h1 className="text-5xl font-bold text-center">
                {editMode ? "Edit" : "New"} Blog Post
            </h1>
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
            <SubmitBtn />
            {editMode ? <BlogComments comments={comments} /> : null}
        </form>
    );
}

export default BlogEditor;

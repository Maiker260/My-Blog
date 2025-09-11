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

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            // NEED TO GRAB THE POST ID INFORMATION
            setTitle(`Testing ${id}`);
            setContent(`Testing ${id}`);
        } else {
            setTitle("");
            setContent("");
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
                {id ? "Edit" : "New"} Blog Post
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
            {id ? <BlogComments editMode /> : null}
        </form>
    );
}

export default BlogEditor;

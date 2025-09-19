import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/blog/get-post.js";
import BlogHeader from "../components/blog/blog-preview/BlogHeader.jsx";
import BlogComments from "../components/blog/blog-preview/BlogComments.jsx";
import Loading from "../components/Loading.jsx";
import BlogBody from "../components/blog/blog-preview/BlogBody.jsx";

function BlogPreview() {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [tags, setTags] = useState();
    const [content, setContent] = useState();
    const [comments, setComments] = useState();

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPost(id);
                setTitle(data.title);
                setDate(data.createdAt);
                setContent(data.content);
                setTags(data.tags);
                setComments(data.comments);
                setAuthor(data.user.username);
            } catch (err) {
                console.error("Failed to load data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <Loading message={"Loading Post Data"} />;
    }
    return (
        <section className="flex flex-col gap-15 bg-white p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <BlogHeader author={author} date={date} title={title} tags={tags} />
            <BlogBody content={content} />
            <BlogComments comments={comments} />
        </section>
    );
}

export default BlogPreview;

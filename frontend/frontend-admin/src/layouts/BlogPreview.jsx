import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { getPost } from "../services/blog/get-post.js";
import BlogHeader from "../components/Blog/blog-preview/BlogHeader.jsx";
import BlogBody from "../components/Blog/blog-preview/BlogBody.jsx";
import BlogComments from "../components/Blog/blog-preview/BlogComments.jsx";
import Loading from "../components/Loading.jsx";

function BlogPreview() {
    const { user } = useOutletContext();

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [tags, setTags] = useState();
    const [content, setContent] = useState();
    const [comments, setComments] = useState();

    const [loading, setLoading] = useState(true);

    const { id: postId } = useParams();

    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            try {
                const data = await getPost(user.id, postId);

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
    }, [user, postId]);

    if (loading || !user) {
        return <Loading message="Loading post data..." />;
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

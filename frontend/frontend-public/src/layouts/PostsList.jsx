import { useState, useEffect } from "react";
import Post from "../components/blog/Post.jsx";
import getAllPosts from "../services/get-all-posts.js";
import Loading from "../components/Loading.jsx";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPosts();

                if (data.ok === false) {
                    throw data.err;
                }

                setPosts(data);
            } catch (err) {
                console.error("Failed to load posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading message={"Loading Posts"} />;
    }

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4 auto-rows-[350px]">
            {posts.map((pst) => (
                <Post key={pst.id} {...pst} />
            ))}
        </div>
    );
}

export default PostsList;

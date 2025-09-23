import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Post from "../components/Blog/blog-list/Post.jsx";
import { getAllPosts } from "../services/blog/get-all-posts.js";
import Loading from "../components/Loading.jsx";

function BlogList() {
    const { user, loadingUser } = useOutletContext();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;

            setLoading(true);
            try {
                const data = await getAllPosts(user.id);

                if (data.ok === false) {
                    throw data.err;
                }

                setPosts(data);
            } catch (err) {
                console.error("Failed to load posts:", err);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    if (loadingUser || loading) {
        return <Loading message={"Loading Posts"} />;
    }

    if (!user || posts.length === 0) {
        return (
            <section className="text-gray-500 flex justify-center items-center h-full">
                No posts available.
            </section>
        );
    }

    return (
        <section className="text-neutral-800 flex flex-col gap-2 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            {user && posts?.length === 0 ? (
                <p className="text-gray-500">No posts available.</p>
            ) : (
                posts.map((pst) => <Post key={pst.id} {...pst} />)
            )}
        </section>
    );
}

export default BlogList;

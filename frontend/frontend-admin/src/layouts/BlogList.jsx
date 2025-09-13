import { useState, useEffect } from "react";
import Post from "../components/Blog/blog-list/Post.jsx";

function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const dummyPosts = [
            {
                id: 1,
                title: "My first Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1"],
            },
            {
                id: 2,
                title: "My second Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1", "1"],
            },
            {
                id: 3,
                title: "My third Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1", "1", "1"],
            },
            {
                id: 4,
                title: "My fourth Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1", "1", "1", "1"],
            },
            {
                id: 5,
                title: "My fifth Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1", "1", "1", "1", "1"],
            },
            {
                id: 6,
                title: "My six Post",
                date: "Tuesday, 09 Sep 2025",
                comments: ["1", "1", "1", "1", "1", "1", "1", "1"],
            },
        ];

        setPosts(dummyPosts);
    }, []);

    return (
        <section className="text-neutral-800 flex flex-col gap-2 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            {posts.map((pst) => (
                <Post key={pst.id} {...pst} />
            ))}
        </section>
    );
}

export default BlogList;

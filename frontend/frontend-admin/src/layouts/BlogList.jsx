import Post from "../components/Blog/blog-list/Post.jsx";

function BlogList() {
    return (
        <section className="text-neutral-800 flex flex-col gap-5 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <Post title={"My first Post"} date={"Tuesday, 09 Sep 2025"} />
            <Post title={"My second Post"} date={"Tuesday, 09 Sep 2025"} />
            <Post title={"My third Post"} date={"Tuesday, 09 Sep 2025"} />
            <Post title={"My fourth Post"} date={"Tuesday, 09 Sep 2025"} />
            <Post title={"My fifth Post"} date={"Tuesday, 09 Sep 2025"} />
        </section>
    );
}

export default BlogList;

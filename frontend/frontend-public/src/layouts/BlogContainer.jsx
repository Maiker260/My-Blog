import BlogHeader from "../components/blog/BlogHeader.jsx";
import BlogBody from "../components/blog/BlogBody.jsx";
import BlogComments from "../components/blog/BlogComments.jsx";

function BlogContainer() {
    return (
        <section className="flex flex-col gap-15 bg-white p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <BlogHeader />
            <BlogBody />
            <BlogComments />
        </section>
    );
}

export default BlogContainer;

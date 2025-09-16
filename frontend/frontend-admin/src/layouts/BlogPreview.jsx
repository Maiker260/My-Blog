import BlogHeader from "../components/blog/blog-preview/BlogHeader.jsx";
import BlogBody from "../components/blog/blog-preview/BlogBody.jsx";
import BlogComments from "../components/blog/blog-preview/BlogComments.jsx";

function BlogPreview() {
    return (
        <section className="flex flex-col gap-15 bg-white p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <BlogHeader />
            <BlogBody />
            <BlogComments />
        </section>
    );
}

export default BlogPreview;

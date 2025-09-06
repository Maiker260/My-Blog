import BlogComments from "../components/Blog/BlogComments.jsx";
import BlogContent from "../components/Blog/BlogContent.jsx";
import BlogTitle from "../components/Blog/BlogTitle.jsx";
import TagsContainer from "../components/Blog/TagsContainer.jsx";

function BlogEditor() {
    return (
        <section className="text-neutral-800 flex flex-col gap-13 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <h1 className="text-5xl font-bold text-center">New Blog</h1>
            <TagsContainer />
            <BlogTitle />
            <section className="flex flex-col">
                <h2 className="text-3xl font-bold mb-4">
                    Write a New Blog Post:
                </h2>
                <BlogContent />
            </section>
            <BlogComments />
        </section>
    );
}

export default BlogEditor;

function BlogTitle() {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Title:</h2>
            <input
                type="text"
                className="w-full bg-white shadow-md rounded-lg p-3"
            />
        </section>
    );
}

export default BlogTitle;

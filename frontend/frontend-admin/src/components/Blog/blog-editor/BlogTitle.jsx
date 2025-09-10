function BlogTitle({ value, onChange }) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Title:</h2>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Enter a Blog Title"
                className="w-full bg-white shadow-md rounded-lg p-3"
            />
        </section>
    );
}

export default BlogTitle;

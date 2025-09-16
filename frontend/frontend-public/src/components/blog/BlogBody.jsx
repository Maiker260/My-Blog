import BackBtn from "../BackBtn.jsx";

function BlogBody({ content }) {
    return (
        <main className="text-neutral-800 text-xl leading-relaxed flex flex-col gap-6">
            <div
                className="line-clamp-3 text-base text-gray-500 prose"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <BackBtn />
        </main>
    );
}

export default BlogBody;

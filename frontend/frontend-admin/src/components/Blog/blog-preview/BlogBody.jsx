import BackBtn from "../../BackBtn.jsx";

function BlogBody({ content }) {
    return (
        <main className="text-neutral-800 text-xl leading-relaxed flex flex-col gap-14">
            <div
                className="text-base text-neutral-800 prose"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <BackBtn />
        </main>
    );
}

export default BlogBody;

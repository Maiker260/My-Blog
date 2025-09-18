import Tag from "../../Tag.jsx";
import formatDate from "../../../utils/format-date.js";

function BlogHeader({ author, date, title, tags }) {
    return (
        <header className="flex flex-col gap-2">
            <section className="text-gray-500 flex flex-col items-end">
                <p>{formatDate(date)}</p>
                <p>{author}</p>
            </section>
            <section className="flex flex-col gap-8">
                <h1 className="text-neutral-900 text-6xl leading-tight font-semibold">
                    {title}
                </h1>
                <div className="flex gap-2">
                    {tags?.map((tg) => (
                        <Tag key={tg.id} name={tg.name} isPreview />
                    ))}
                </div>
            </section>
        </header>
    );
}

export default BlogHeader;

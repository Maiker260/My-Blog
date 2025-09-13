function Comment({ id, author, date, content }) {
    return (
        <article className="text-base leading-relaxed flex flex-col gap-1.5">
            <p>
                <span className="font-semibold">{author}</span>, {date}
            </p>
            <p className="ml-6 italic">{content}</p>
        </article>
    );
}

export default Comment;

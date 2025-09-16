import formatDate from "../utils/format-date.js";

function Comment({ id, user, createdAt, content }) {
    return (
        <article className="text-base leading-relaxed flex flex-col gap-1.5">
            <p>
                <span className="font-semibold">{user.username}</span> {" - "}
                <span className="text-sm text-gray-500">
                    {formatDate(createdAt)}
                </span>
            </p>
            <p className="ml-6 italic">{content}</p>
        </article>
    );
}

export default Comment;

import { useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../utils/format-date.js";
import { DeleteIcon } from "./icons/DeleteIcon.jsx";
import LoadingBanner from "./LoadingBanner.jsx";
import { deleteComment } from "../services/blog/delete-comment.js";

function Comment({ id: commentId, username, createdAt, content }) {
    const [submitting, setSubmitting] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");
    const { id: postId } = useParams();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this comment? This action cannot be undone."
        );

        if (!confirmed) return;

        setSubmitting(true);
        setLoadingMessage("Deleting Comment...");
        try {
            await deleteComment(postId, commentId);
        } catch (err) {
            console.error("Error Deleting Comment:", err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <article
            className="flex justify-between items-center w-fit gap-4 cursor-pointer p-2 rounded hover:bg-blue-200 group"
            onClick={handleDelete}
        >
            <LoadingBanner show={submitting} message={loadingMessage} />
            <div className="text-base leading-relaxed flex flex-col gap-1.5">
                <p>
                    <span className="font-semibold">{username}</span> {" - "}
                    <span className="text-sm text-gray-500">
                        {formatDate(createdAt)}
                    </span>
                </p>
                <p className="ml-1 pl-4 border-l-2 border-gray-300 italic">
                    {content}
                </p>
            </div>
            <DeleteIcon className="w-5 h-5 text-red-600 transition duration-300 group-hover:scale-120" />
        </article>
    );
}

export default Comment;

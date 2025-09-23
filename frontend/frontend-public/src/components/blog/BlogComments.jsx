import { useState } from "react";
import formatDate from "../../utils/format-date.js";
import CommentModal from "../CommentModal.jsx";
import addComment from "../../services/add-comment.js";

function BlogComments({ comments, postId }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (data) => {
        setSubmitting(true);
        try {
            await addComment(postId, data);
        } finally {
            setSubmitting(false);
            setModalOpen(false);
            window.location.reload();
        }
    };

    return (
        <section className="text-neutral-800 flex flex-col gap-12">
            <h2 className="text-4xl font-bold ">{comments.length} Comments</h2>
            <button
                className="w-full p-2 flex items-center justify-center bg-emerald-700 text-white text-lg font-semibold rounded-sm hover:cursor-pointer hover:bg-emerald-600"
                onClick={() => setModalOpen(true)}
            >
                Add Comment
            </button>
            <article className="flex flex-col gap-6">
                <div className="text-base leading-relaxed flex flex-col gap-6">
                    {comments?.map((comment) => (
                        <div
                            className="text-base flex flex-col gap-1.5"
                            key={comment.id}
                        >
                            <p>
                                <span className="font-semibold">
                                    {comment.username}
                                </span>
                                {" - "}
                                {formatDate(comment.createdAt)}
                            </p>
                            <p className="ml-1 pl-4 border-l-2 border-gray-300 italic">
                                {comment.content}
                            </p>
                        </div>
                    ))}
                </div>
            </article>
            <CommentModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                submitting={submitting}
                onSubmit={handleSubmit}
            />
        </section>
    );
}

export default BlogComments;

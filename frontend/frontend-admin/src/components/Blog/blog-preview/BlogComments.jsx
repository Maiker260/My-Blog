import formatDate from "../../../utils/format-date.js";

function BlogComments({ comments }) {
    return (
        <section className="text-neutral-800 flex flex-col gap-12">
            <h2 className="text-4xl font-bold ">{comments.length} Comments</h2>
            <button className="w-full p-2 flex items-center justify-center bg-emerald-700 text-white text-lg font-semibold rounded-sm hover:cursor-pointer hover:bg-emerald-600">
                Add Comment
            </button>
            <article className="flex flex-col gap-6">
                <div className="text-base leading-relaxed flex flex-col gap-1.5">
                    {comments?.map((comment) => (
                        <div
                            className="text-base flex flex-col gap-1.5"
                            key={comment.id}
                        >
                            <p>
                                <span className="font-semibold">
                                    {comment.user.username}
                                </span>
                                {" - "}
                                {formatDate(comment.createdAt)}
                            </p>
                            <p className="ml-6 italic">{comment.content}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default BlogComments;

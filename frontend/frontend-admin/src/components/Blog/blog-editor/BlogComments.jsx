import Comment from "../../Comment.jsx";

function BlogComments({ comments }) {
    return (
        <section className="text-neutral-800 flex flex-col gap-12">
            <h2 className="text-3xl font-bold">{comments.length} Comments</h2>
            <article className="flex flex-col gap-6">
                {comments.map((com) => (
                    <Comment key={com.id} {...com} />
                ))}
            </article>
        </section>
    );
}

export default BlogComments;

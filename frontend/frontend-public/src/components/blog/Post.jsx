import { Link } from "react-router-dom";
import formatDate from "../../utils/format-date.js";
import { RightArrow } from "../../icons/RightArrow.jsx";
import { Comment } from "../../icons/Comment.jsx";

function Post({ id, title, content, createdAt, comments }) {
    return (
        <article>
            <Link
                to={`/posts/${id}`}
                className="flex flex-col justify-between h-full bg-white text-neutral-800 border border-b-black rounded p-6 group hover:bg-blue-200 hover:cursor-pointer"
            >
                <div className="flex flex-col gap-4">
                    <div>
                        <h5 className="text-sm text-gray-500">
                            {formatDate(createdAt)}
                        </h5>
                        <h2 className="text-2xl font-semibold">{title}</h2>
                    </div>
                    <div
                        className="line-clamp-3 text-base text-gray-500 prose"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
                <div className="flex justify-between text-gray-600">
                    <div className="flex gap-1.5 items-center">
                        <span className="mb-0.5">
                            {comments ? comments.length : 0}
                        </span>
                        <Comment />
                    </div>
                    <div className="flex gap-2 group-hover:underline">
                        <p>Read More</p>
                        <RightArrow fill={"oklch(44.6% 0.03 256.802)"} />
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default Post;

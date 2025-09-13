import { Link } from "react-router-dom";
import { RightArrow } from "../../icons/RightArrow.jsx";
import { Comment } from "../../icons/Comment.jsx";

function Post({ id, title, date, comments }) {
    return (
        <Link
            to={`/edit/${id}`}
            className="flex flex-col gap-1 p-2 rounded group hover:bg-blue-200 hover:cursor-pointer"
        >
            <p className="text-sm text-gray-500">{date}</p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex justify-between text-gray-600">
                <div className="flex gap-1.5 items-center">
                    <span className="mb-0.5">{comments.length}</span>
                    <Comment />
                </div>
                <div className="flex gap-2 group-hover:underline">
                    <p>Edit Post</p>
                    <RightArrow fill={"oklch(44.6% 0.03 256.802)"} />
                </div>
            </div>
        </Link>
    );
}

export default Post;

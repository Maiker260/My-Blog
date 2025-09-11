import { RightArrow } from "../../icons/RightArrow.jsx";
import { Link } from "react-router-dom";

function Post({ title, date }) {
    return (
        <Link
            to={"/edit/12"}
            className="flex flex-col gap-1 p-2 rounded group hover:bg-blue-200 hover:cursor-pointer"
        >
            <p className="text-sm text-gray-500">{date}</p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex justify-between text-gray-600">
                <p className="group-hover:underline">Comments</p>
                <div className="flex gap-2 group-hover:underline">
                    <p>Edit Post</p>
                    <RightArrow fill={"oklch(44.6% 0.03 256.802)"} />
                </div>
            </div>
        </Link>
    );
}

export default Post;

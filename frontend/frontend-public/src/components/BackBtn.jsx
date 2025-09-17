import { Link } from "react-router-dom";
import { LeftArrow } from "../icons/LeftArrow.jsx";

function BackBtn() {
    return (
        <Link
            className="text-neutral-800 font-bold inline-flex items-center gap-2 hover:underline w-fit"
            to="/"
        >
            <LeftArrow />
            <span>Go Back</span>
        </Link>
    );
}

export default BackBtn;

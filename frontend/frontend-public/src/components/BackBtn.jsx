import { LeftArrow } from "../icons/LeftArrow.jsx";

function BackBtn() {
    return (
        // NEED TO BE REPLACED WITH A "LINK TAG" AFTER SETTING UP THE REACT ROUTER
        <a
            className="text-neutral-800 inline-flex items-center gap-2 hover:underline w-fit"
            href="/"
        >
            <LeftArrow />
            <span>Go Back</span>
        </a>
    );
}

export default BackBtn;

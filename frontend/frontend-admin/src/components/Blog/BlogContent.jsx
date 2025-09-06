import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Custom toolbar configuration
const modules = {
    toolbar: [
        [{ font: [] }], // font dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // heading levels
        ["bold", "italic", "underline", "strike"], // basic text styles
        [{ color: [] }, { background: [] }], // text and background color
        [{ script: "sub" }, { script: "super" }], // subscript/superscript
        [{ list: "ordered" }, { list: "bullet" }], // lists
        [{ indent: "-1" }, { indent: "+1" }], // indentation
        [{ align: [] }], // text alignment
        ["link", "image"], // links and images
        ["clean"], // remove formatting
    ],
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
];

export default function BlogContent({ onSave }) {
    const [content, setContent] = useState("");

    const handleSave = () => {
        if (onSave) onSave(content);
        console.log("Blog content:", content);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl mx-auto">
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="bg-white rounded min-h-[300px]"
            />

            <button
                onClick={handleSave}
                className="mt-4 px-6 py-2 bg-emerald-700 hover:bg-emerald-600 hover:cursor-pointer text-white font-semibold rounded transition"
            >
                Save Blog
            </button>
        </div>
    );
}

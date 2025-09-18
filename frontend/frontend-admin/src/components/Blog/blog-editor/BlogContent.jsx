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
        ["code-block"], // code block button
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
    "code-block",
];

export default function BlogContent({ value, onChange }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl mx-auto">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                className="bg-white rounded min-h-[300px]"
            />
        </div>
    );
}

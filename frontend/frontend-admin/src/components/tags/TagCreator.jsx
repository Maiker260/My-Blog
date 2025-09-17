import { useState } from "react";
import SubmitBtn from "../SubmitBtn.jsx";

function TagCreator({ availableTags, setAvailableTags, setSelectedTags }) {
    const [tag, setTag] = useState("");

    const handleInputChange = (e) => {
        setTag(e.target.value);
    };

    const addTag = () => {
        if (!availableTags.includes(tag) && tag.trim() !== "") {
            setAvailableTags((prevTags) => [...prevTags, tag]);
            setSelectedTags((prevTags) => [...prevTags, tag]);
            setTag("");
        } else {
            alert("Tag already exist.");
        }
    };

    return (
        <section className="flex gap-2 ">
            <input
                type="text"
                className="border border-black text-neutral-800 rounded p-2"
                placeholder="New Tag"
                value={tag}
                onChange={handleInputChange}
            />
            <SubmitBtn message={"Add Tag"} onClick={addTag} />
        </section>
    );
}

export default TagCreator;

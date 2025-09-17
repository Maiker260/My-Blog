import Tag from "../Tag.jsx";

function TagList({ availableTags, selectedTags, onChange }) {
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            onChange(selectedTags.filter((t) => t !== tag));
        } else {
            onChange([...selectedTags, tag]);
        }
    };

    return (
        <section className="flex justify-center gap-5 w-full">
            <div className="flex flex-col flex-wrap gap-3 w-3/5">
                {availableTags.map((tag, index) => (
                    <Tag
                        key={index}
                        name={tag}
                        selected={selectedTags.includes(tag)}
                        onClick={() => toggleTag(tag)}
                    />
                ))}
            </div>
        </section>
    );
}

export default TagList;

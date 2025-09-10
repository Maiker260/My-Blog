import Tag from "../../Tag.jsx";

function TagsContainer({ availableTags, selectedTags, onChange }) {
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            onChange(selectedTags.filter((t) => t !== tag));
        } else {
            onChange([...selectedTags, tag]);
        }
    };

    return (
        <section className="flex flex-col gap-5 w-full">
            <h2 className="text-3xl font-bold">Tags:</h2>
            <div className="flex flex-wrap gap-3">
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

export default TagsContainer;

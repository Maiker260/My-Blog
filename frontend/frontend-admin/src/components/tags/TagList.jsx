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
            {/* <div className="flex flex-col flex-wrap gap-3 w-3/5"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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

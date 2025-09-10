function Tag({ name, selected, onClick }) {
    return (
        <span
            className={`px-3 py-1 rounded cursor-pointer ${
                selected ? "bg-emerald-700 text-white" : "bg-gray-300"
            }`}
            onClick={onClick}
        >
            {" "}
            {name}
        </span>
    );
}

export default Tag;

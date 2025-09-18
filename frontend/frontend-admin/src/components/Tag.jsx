function Tag({ name, selected, onClick, isPreview }) {
    const styles = isPreview
        ? "px-3 py-2 rounded-sm bg-cyan-700"
        : `cursor-pointer ${
              selected ? "bg-emerald-700 text-white" : "bg-gray-300"
          }`;

    return (
        <span className={`px-3 py-2 rounded ${styles}`} onClick={onClick}>
            {" "}
            {name}
        </span>
    );
}

export default Tag;

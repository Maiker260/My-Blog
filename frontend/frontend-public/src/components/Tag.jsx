function Tag({ name }) {
    return (
        <button className="py-2 px-3 rounded-sm bg-cyan-700 hover:bg-cyan-600 hover:cursor-pointer">
            {name}
        </button>
    );
}

export default Tag;

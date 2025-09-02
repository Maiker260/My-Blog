function Tag({ name }) {
    return (
        // NEED TO BE REPLACED WITH A "LINK TAG" AFTER SETTING UP THE REACT ROUTER
        <a className="py-2 px-3 rounded-sm bg-cyan-700 hover:bg-cyan-600 hover:cursor-pointer">
            {name}
        </a>
    );
}

export default Tag;

function Tag({ name, isPointer = false }) {
    let pointer = isPointer ? "hover:cursor-pointer hover:bg-cyan-600" : "null";

    const classes = `py-2 px-3 rounded-sm bg-cyan-700 ${pointer}`;

    return (
        // NEED TO BE REPLACED WITH A "LINK TAG" AFTER SETTING UP THE REACT ROUTER
        <a className={classes}>{name}</a>
    );
}

export default Tag;

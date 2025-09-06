function Tag({ name }) {
    return (
        // NEED TO BE REPLACED WITH A "LINK TAG" AFTER SETTING UP THE REACT ROUTER
        <a className="py-2 px-3 rounded-sm border border-b-neutral-700 hover:cursor-pointer hover:bg-emerald-600 hover:text-white hover:border-emerald-600">
            {name}
        </a>
    );
}

export default Tag;

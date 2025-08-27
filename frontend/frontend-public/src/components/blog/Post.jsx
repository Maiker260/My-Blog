function Post() {
    return (
        <article className="flex flex-col gap-28 bg-white text-black border border-b-black max-h-96 rounded p-4">
            <div className="flex flex-col gap-4">
                <div>
                    <h5 className="text-sm">Sunday, 26. February 2023</h5>
                    <h2 className="text-2xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni.
                    </h2>
                </div>
                <p className="line-clamp-3 text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    nesciunt harum temporibus possimus quasi nihil cupiditate
                    recusandae maxime exercitationem? Voluptate.
                </p>
            </div>
            <div className="flex place-content-between">
                <p>Comments</p>
                <span>Read More</span>
            </div>
        </article>
    );
}

export default Post;

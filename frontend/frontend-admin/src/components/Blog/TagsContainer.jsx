import Tag from "../Tag.jsx";

function TagsContainer() {
    return (
        <section className="flex flex-col gap-5 w-full">
            <h2 className="text-3xl font-bold">Tags:</h2>
            <div className="flex flex-wrap gap-3">
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"JS"} />
                <Tag name={"HTML"} />
                <Tag name={"HTML"} />
                <Tag name={"HTML"} />
            </div>
        </section>
    );
}

export default TagsContainer;

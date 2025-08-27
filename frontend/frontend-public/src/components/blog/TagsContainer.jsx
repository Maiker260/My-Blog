import Tag from "../Tag.jsx";

function TagsContainer() {
    return (
        <section className="flex flex-col gap-5 w-full max-w-2xs mx-auto">
            <h2 className="text-3xl">Tags</h2>
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
            <p className="underline hover:cursor-pointer hover:text-emerald-600 w-fit">
                {">"} Show All
            </p>
        </section>
    );
}

export default TagsContainer;

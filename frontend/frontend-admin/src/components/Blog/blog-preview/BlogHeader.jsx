import Tag from "../../Tag.jsx";

function BlogHeader() {
    return (
        <header className="flex flex-col gap-2">
            <section className="text-gray-500 flex flex-col items-end">
                <p>Sunday, 05 March 2023</p>
                <p>Yo Merito</p>
            </section>
            <section className="flex flex-col gap-8">
                <h1 className="text-neutral-900 text-6xl leading-tight font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quaerat, eveniet.
                </h1>
                <div className="flex gap-2">
                    <Tag name={"HTML"} />
                    <Tag name={"JS"} />
                </div>
            </section>
        </header>
    );
}

export default BlogHeader;

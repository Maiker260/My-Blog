function Loading({ message }) {
    return (
        <section className="text-neutral-800 flex flex-col gap-13 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            {message}
        </section>
    );
}

export default Loading;

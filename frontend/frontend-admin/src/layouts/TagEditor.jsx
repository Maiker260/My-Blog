import { useOutletContext } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import TagCreator from "../components/tags/TagCreator.jsx";
import TagList from "../components/tags/TagList.jsx";

function TagEditor() {
    const {
        availableTags,
        setAvailableTags,
        selectedTags,
        setSelectedTags,
        loading,
    } = useOutletContext();

    if (loading) {
        return <Loading message={"Loading Tags"} />;
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2  text-neutral-800 bg-gray-100 p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <section className="flex flex-col gap-12 items-center">
                <TagCreator
                    availableTags={availableTags}
                    setAvailableTags={setAvailableTags}
                    setSelectedTags={setSelectedTags}
                />
                <TagList
                    availableTags={availableTags}
                    selectedTags={selectedTags}
                    onChange={setSelectedTags}
                />
            </section>
        </div>
    );
}

export default TagEditor;

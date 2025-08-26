import TagsContainer from "../components/blog/TagsContainer.jsx";
import SidebarBtn from "../components/SidebarBtn.jsx";

function Sidebar() {
    return (
        <article className="flex flex-col gap-18">
            <TagsContainer />
            <div className="flex flex-col gap-4">
                <SidebarBtn name={"Suggest an Idea"} />
                <SidebarBtn name={"My Code "} />
                <SidebarBtn name={"About Me"} />
            </div>
        </article>
    );
}

export default Sidebar;

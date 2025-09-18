import TagsContainer from "../components/blog/TagsContainer.jsx";
import SidebarBtn from "../components/SidebarBtn.jsx";

function Sidebar() {
    return (
        <article className="flex">
            {/* <TagsContainer /> */}
            <div className="flex flex-col gap-4 mt-20">
                <SidebarBtn name={"Suggest an Idea"} hasIcon />
                <SidebarBtn
                    name={"My Code "}
                    redirectTo={"https://github.com/Maiker260/My-Blog"}
                    newTab
                />
                <SidebarBtn name={"About"} />
            </div>
        </article>
    );
}

export default Sidebar;

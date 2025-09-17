import { useLocation, useNavigate } from "react-router-dom";
import SidebarBtn from "../components/SidebarBtn.jsx";
import { saveUserTags } from "../services/tag/save-user-tags.js";

function Sidebar({ selectedTags, setSelectedTags }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathUrl = location.pathname;

    const isEditRoute = pathUrl.startsWith("/post/edit/");
    const isPreviewRoute = pathUrl.startsWith("/post/preview/");

    let mainButton;

    if (pathUrl === "/") {
        mainButton = (
            <SidebarBtn name="Write a new Post" redirectTo="/post/new" />
        );
    } else if (
        isEditRoute ||
        pathUrl === "/post/new" ||
        pathUrl === "/tag/edit"
    ) {
        mainButton = (
            <SidebarBtn name="Back to Home" redirectTo="/" warnBeforeLeave />
        );
    } else if (isPreviewRoute) {
        const editPath = pathUrl.replace("/preview", "/edit");
        mainButton = (
            <SidebarBtn name="Back to Edit Mode" redirectTo={editPath} />
        );
    }

    const handleSaveTag = async () => {
        await saveUserTags(selectedTags, navigate);
        setSelectedTags([]);
    };

    return (
        <article className="flex flex-col gap-18">
            <h2>Welcome Back, User!</h2>
            <div className="flex flex-col gap-4">
                {mainButton}
                {pathUrl === "/" ? (
                    <SidebarBtn
                        name="Create New Tags"
                        redirectTo={"/tag/edit"}
                    />
                ) : null}
                {pathUrl === "/tag/edit" ? (
                    <SidebarBtn
                        name="Save Tags"
                        onClick={handleSaveTag}
                        warnBeforeLeave
                        saveData
                    />
                ) : null}
                {isEditRoute && (
                    <SidebarBtn
                        name="Preview"
                        redirectTo={pathUrl.replace("/edit", "/preview")}
                    />
                )}
            </div>
        </article>
    );
}

export default Sidebar;

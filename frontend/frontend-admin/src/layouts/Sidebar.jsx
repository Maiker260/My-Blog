import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SidebarBtn from "../components/SidebarBtn.jsx";
import { saveUserTags } from "../services/tag/save-user-tags.js";
import LoadingBanner from "../components/LoadingBanner.jsx";
import { deletePost } from "../services/blog/delete-post.js";

function Sidebar({ selectedTags, setSelectedTags }) {
    const [submitting, setSubmitting] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const pathUrl = location.pathname;

    const { id } = useParams();

    const isEditRoute = pathUrl.startsWith("/posts/edit/");
    const isPreviewRoute = pathUrl.startsWith("/posts/preview/");

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
        setSubmitting(true);
        setLoadingMessage("Saving Tags...");
        try {
            await saveUserTags(selectedTags, navigate);
            setSelectedTags([]);
        } catch (err) {
            console.error("Error saving tags:", err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeletePost = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this post? This action cannot be undone."
        );

        if (!confirmed) return;

        setSubmitting(true);
        setLoadingMessage("Deleting Post...");
        try {
            await deletePost(id, navigate);
        } catch (err) {
            console.error("Error Deleting Post:", err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <article className="flex flex-col justify-between">
            <LoadingBanner show={submitting} message={loadingMessage} />
            <div className="flex flex-col gap-18">
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
                            warnBeforeLeave
                        />
                    )}
                </div>
            </div>
            {isEditRoute && (
                <SidebarBtn name="DELETE" onClick={handleDeletePost} />
            )}
        </article>
    );
}

export default Sidebar;

import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SidebarBtn from "../components/SidebarBtn.jsx";
import { saveUserTags } from "../services/tag/save-user-tags.js";
import LoadingBanner from "../components/LoadingBanner.jsx";
import { deletePost } from "../services/blog/delete-post.js";
import LoginModal from "../components/LoginModal.jsx";
import SignUpModal from "../components/SignUpModal.jsx";
import { authUser } from "../services/auth/auth-user.js";
import { logoutUser } from "../services/auth/logout.js";
import { signUp } from "../services/auth/sign-up.js";

function Sidebar({
    selectedTags,
    setSelectedTags,
    user,
    setUser,
    loadingUser,
}) {
    const [submitting, setSubmitting] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

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
            await saveUserTags(user.id, selectedTags, navigate);
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
            await deletePost(id, user.id, navigate);
        } catch (err) {
            console.error("Error Deleting Post:", err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleLogin = async (data) => {
        setSubmitting(true);
        try {
            const user = await authUser(data);
            setUser(user);
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setSubmitting(false);
            setLoginModalOpen(false);
        }
    };

    const handleSignUp = async (data) => {
        setSubmitting(true);
        try {
            await signUp(data);
        } catch (err) {
            console.error("Sign Up failed:", err);
        } finally {
            setSubmitting(false);
            setSignUpModalOpen(false);
        }
    };

    const handleLogout = async () => {
        setSubmitting(true);
        setLoadingMessage("Logging out...");
        try {
            await logoutUser();
            setUser(null);
        } catch (err) {
            console.error("Logout failed", err);
        } finally {
            setSubmitting(false);
        }
    };

    if (loadingUser)
        return (
            <article className="flex flex-col justify-between">
                <div className="flex flex-col gap-18">
                    <h2>Welcome Back, Loading!</h2>
                    <div className="flex flex-col gap-4">
                        <SidebarBtn name={"Loading User"} />
                        <SidebarBtn name={"Loading User"} />
                    </div>
                </div>
            </article>
        );

    return (
        <article className="flex flex-col justify-between">
            <LoadingBanner show={submitting} message={loadingMessage} />
            <div className="flex flex-col gap-18">
                {user ? (
                    <>
                        <h2>Welcome Back, {user.username}!</h2>

                        <div className="flex flex-col gap-4">
                            {mainButton}

                            {pathUrl === "/" && (
                                <article className="flex flex-col gap-20">
                                    <SidebarBtn
                                        name="Create New Tags"
                                        redirectTo="/tag/edit"
                                    />
                                    <SidebarBtn
                                        name="Logout"
                                        onClick={handleLogout}
                                    />
                                </article>
                            )}

                            {pathUrl === "/tag/edit" && (
                                <SidebarBtn
                                    name="Save Tags"
                                    onClick={handleSaveTag}
                                    warnBeforeLeave
                                    saveData
                                />
                            )}

                            {isEditRoute && (
                                <SidebarBtn
                                    name="Preview"
                                    redirectTo={pathUrl.replace(
                                        "/edit",
                                        "/preview"
                                    )}
                                    warnBeforeLeave
                                />
                            )}
                        </div>
                    </>
                ) : (
                    <article className="flex flex-col justify-between">
                        <div className="flex flex-col gap-18">
                            <h2>Log In or Sign Up</h2>
                            <div className="flex flex-col gap-4">
                                <SidebarBtn
                                    name="Login"
                                    onClick={() => setLoginModalOpen(true)}
                                />
                                <SidebarBtn
                                    name="Sign Up"
                                    onClick={() => setSignUpModalOpen(true)}
                                />
                            </div>
                        </div>
                    </article>
                )}
            </div>

            {isEditRoute && (
                <SidebarBtn name="DELETE" onClick={handleDeletePost} />
            )}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setLoginModalOpen(false)}
                submitting={submitting}
                onSubmit={handleLogin}
            />
            <SignUpModal
                isOpen={isSignUpModalOpen}
                onClose={() => setSignUpModalOpen(false)}
                submitting={submitting}
                onSubmit={handleSignUp}
            />
        </article>
    );
}

export default Sidebar;

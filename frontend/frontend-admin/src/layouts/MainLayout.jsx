import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { getUserTags } from "../services/tag/get-user-tags.js";
import { getUser } from "../services/user/get-user.js";

function MainLayout() {
    const location = useLocation();
    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [loading, setLoading] = useState(false);

    // Authenticated user state
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    // Fetch user info
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err) {
                console.error("Not authenticated", err);
                setUser(null);
            } finally {
                setLoadingUser(false);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        if (location.pathname === "/tag/edit") {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const data = await getUserTags(user.id);
                    setAvailableTags(data.map((tag) => tag.name));
                    setSelectedTags(data.map((tag) => tag.name));
                } catch (err) {
                    console.error("Error fetching tags:", err);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [user, location.pathname]);

    // if (loadingUser) return <div>Loading user...</div>;

    return (
        <div className="flex flex-col content-center pt-3 min-h-screen">
            <Navbar className="col-span-2 justify-between" />
            <div className="flex-1 grid grid-cols-[1fr_auto] gap-10 w-full max-w-7xl mx-auto px-4 py-6 overflow-hidden">
                <Outlet
                    context={{
                        availableTags,
                        setAvailableTags,
                        selectedTags,
                        setSelectedTags,
                        loading,
                        loadingUser,
                        user,
                    }}
                />
                <Sidebar
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    user={user}
                    setUser={setUser}
                    loadingUser={loadingUser}
                />
            </div>
        </div>
    );
}

export default MainLayout;

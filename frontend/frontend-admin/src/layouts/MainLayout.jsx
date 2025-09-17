import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { getUserTags } from "../services/tag/get-user-tags.js";

function MainLayout() {
    const [availableTags, setAvailableTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/tag/edit") {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const data = await getUserTags();
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
    }, [location.pathname]);

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
                    }}
                />
                <Sidebar
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                />
            </div>
        </div>
    );
}

export default MainLayout;

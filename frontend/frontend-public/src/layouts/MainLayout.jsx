import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import BlogMain from "./BlogMain.jsx";

function MainLayout() {
    return (
        <div className="flex flex-col content-center pt-3 min-h-screen">
            <Navbar className="col-span-2 justify-between" />
            <div className="flex-1 grid grid-cols-[1fr_auto] grid-rows-1 gap-10 w-full max-w-7xl mx-auto px-4 py-6">
                <BlogMain />
                <Sidebar />
            </div>
        </div>
    );
}

export default MainLayout;

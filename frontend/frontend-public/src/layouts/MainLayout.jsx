import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

function MainLayout() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full max-w-7xl mx-auto px-4 py-6">
                <Navbar className={"col-span-2 justify-between"} />
                <Sidebar className={"row-span-2 col-start-2 row-start-2"} />
                <h1 className={"col-start-1 row-start-2"}>Tags</h1>
                <h1>Content</h1>
            </div>
        </div>
    );
}

export default MainLayout;

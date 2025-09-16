import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const pathUrl = location.pathname;

    const isEditRoute = pathUrl.startsWith("/edit/");

    const handleClick = (e) => {
        if (isEditRoute || pathUrl === "/new") {
            const confirmed = window.confirm(
                "You have unsaved changes. Are you sure you want to leave?"
            );
            if (!confirmed) {
                e.preventDefault();
                return;
            }
        }
    };

    return (
        <nav className="w-full font-bold">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 text-4xl">
                <Link
                    to={"/"}
                    className="underline decoration-emerald-600"
                    onClick={handleClick}
                >
                    My Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full font-bold">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 text-4xl">
                <Link to={"/"} className="underline decoration-emerald-600">
                    My Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

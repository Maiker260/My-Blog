import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center text-neutral-800 bg-white p-6 h-full max-h-[calc(100vh-120px)] overflow-auto scrollbar-none rounded">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Oops! Page not found.</p>
            <Link
                to="/"
                className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-600"
            >
                Go back home
            </Link>
        </section>
    );
}

export default NotFound;

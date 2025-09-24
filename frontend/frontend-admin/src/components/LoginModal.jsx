import { useState } from "react";
import LoadingBanner from "./LoadingBanner.jsx";

function LoginModal({ isOpen, onClose, onSubmit, submitting }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, password });
        setUsername("");
        setPassword("");
    };

    if (!isOpen) return null;

    return (
        <div className="text-neutral-700 fixed inset-0 flex items-center justify-center bg-black/70">
            {/* <LoadingBanner show={submitting} message="Loading..." /> */}
            <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-6">
                <h2 className="text-xl text-center font-semibold mb-4">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 hover:cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-600 hover:cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;

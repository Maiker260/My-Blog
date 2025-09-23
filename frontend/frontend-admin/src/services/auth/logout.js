const API_URL = import.meta.env.VITE_API_URL;

export async function logoutUser() {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
    });

    if (!response.ok) throw new Error("Logout failed");

    return true;
}

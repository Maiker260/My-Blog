const API_URL = import.meta.env.VITE_API_URL;

export async function authUser({ username, password }) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: username, password }),
        credentials: "include",
    });

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    return data.user;
}

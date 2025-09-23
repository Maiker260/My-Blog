const API_URL = import.meta.env.VITE_API_URL;

export async function getUser() {
    const response = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        credentials: "include",
    });
    console.log(response.status);

    if (response.status === 401) {
        // Try to refresh token
        const refreshed = await fetch(`${API_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
        });

        if (!refreshed.ok) throw new Error("Not authenticated");

        // Retry fetching user after refresh
        return getUser();
    }

    if (!response.ok) throw new Error("Not authenticated");
    return response.json();
}

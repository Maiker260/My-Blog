const API_URL = import.meta.env.VITE_API_URL;

export async function getUserTags(userId) {
    const response = await fetch(`${API_URL}/users/${userId}/tags/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}

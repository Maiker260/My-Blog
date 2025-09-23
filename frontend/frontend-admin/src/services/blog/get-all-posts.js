const API_URL = import.meta.env.VITE_API_URL;

export async function getAllPosts(userId) {
    const response = await fetch(`${API_URL}/users/${userId}/posts`, {
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

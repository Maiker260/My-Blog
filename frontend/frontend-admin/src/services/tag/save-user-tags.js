const API_URL = import.meta.env.VITE_API_URL;

export async function saveUserTags(userId, tags, navigate) {
    const response = await fetch(`${API_URL}/users/${userId}/tags/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tags),
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    navigate("/");
}

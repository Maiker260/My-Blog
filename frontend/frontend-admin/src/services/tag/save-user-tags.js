const API_URL = import.meta.env.VITE_API_URL;

// export async function saveUserTags(userId, tags, navigate) {
export async function saveUserTags(tags, navigate) {
    const userId = "1";

    const response = await fetch(`${API_URL}/users/${userId}/tags/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tags),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    navigate("/");

    // return await response.json();
}

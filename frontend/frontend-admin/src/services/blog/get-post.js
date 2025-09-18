const API_URL = import.meta.env.VITE_API_URL;

export async function getPost(postId) {
    const userId = 1;

    const response = await fetch(`${API_URL}/users/${userId}/posts/${postId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}

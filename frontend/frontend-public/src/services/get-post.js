const API_URL = import.meta.env.VITE_API_URL;

export default async function getPost(postId) {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
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

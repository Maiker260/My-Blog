const API_URL = import.meta.env.VITE_API_URL;

export default async function addComment(postId, content) {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}

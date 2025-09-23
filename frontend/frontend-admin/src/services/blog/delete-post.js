const API_URL = import.meta.env.VITE_API_URL;

export async function deletePost(postId, userId, navigate) {
    const response = await fetch(`${API_URL}/users/${userId}/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    navigate("/");
}

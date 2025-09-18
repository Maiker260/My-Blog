const API_URL = import.meta.env.VITE_API_URL;

// export async function deletePost(post, postId, userId) {
export async function deletePost(postId, navigate) {
    const userId = 1;

    const response = await fetch(`${API_URL}/users/${userId}/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    navigate("/");
}

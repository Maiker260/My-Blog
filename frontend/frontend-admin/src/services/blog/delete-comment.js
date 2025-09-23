const API_URL = import.meta.env.VITE_API_URL;

export async function deleteComment(postId, commentId) {
    const response = await fetch(
        `${API_URL}/posts/${postId}/comments/${commentId}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    window.location.reload();
}

const API_URL = import.meta.env.VITE_API_URL;

export async function savePost(userId, post, postId) {
    const isExistingPost = Boolean(postId);

    const method = isExistingPost ? "PUT" : "POST";
    const postUrl = isExistingPost
        ? `${API_URL}/users/${userId}/posts/${postId}`
        : `${API_URL}/users/${userId}/posts/new`;

    try {
        const response = await fetch(postUrl, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        return { ok: true, data };
    } catch (error) {
        console.error("Failed to save post:", error);

        return { ok: false, error };
    }
}

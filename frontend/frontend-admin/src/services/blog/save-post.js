export async function savePost(post, id) {
    const userId = 1;
    const isExistingPost = Boolean(id);

    const method = isExistingPost ? "PUT" : "POST";
    const postUrl = isExistingPost
        ? `http://localhost:3000/api/users/${userId}/posts/${id}`
        : `http://localhost:3000/api/users/${userId}/posts/new`;

    try {
        const response = await fetch(postUrl, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
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

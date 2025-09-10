export async function savePost(post) {
    try {
        const response = await fetch("http://localhost:3000/api/posts/", {
            method: "POST",
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

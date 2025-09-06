export async function saveBlog(content) {
    try {
        const response = await fetch("/api/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content }),
        });

        if (!response.ok) {
            throw new Error(`Failed to save blog: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

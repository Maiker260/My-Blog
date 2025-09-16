export default async function getAllPosts() {
    const response = await fetch(`http://localhost:3000/api/posts`, {
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

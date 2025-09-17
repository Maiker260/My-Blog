// export async function getUserTags(userId) {
export async function getUserTags() {
    const userId = "1";

    const response = await fetch(
        `http://localhost:3000/api/users/${userId}/tags/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}

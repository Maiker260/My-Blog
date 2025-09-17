// export async function saveUserTags(userId, tags, navigate) {
export async function saveUserTags(tags, navigate) {
    const userId = "1";

    const response = await fetch(
        `http://localhost:3000/api/users/${userId}/tags/`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tags),
        }
    );

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    navigate("/");

    // return await response.json();
}

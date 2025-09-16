import { savePost } from "./blog/save-post.js";

export async function handleSubmit(
    e,
    { id, title, selectedTags, content, reset, navigate }
) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
        alert("Title and content are required.");
        return;
    }

    const post = { title, tags: selectedTags, content };

    const result = await savePost(post, id);

    if (!result.ok) {
        alert("Failed to save post. Please try again.");
        return;
    }

    console.log("Post saved:", result.data);

    reset();
    navigate("/");
}

export default handleSubmit;

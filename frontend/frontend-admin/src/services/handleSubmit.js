import { savePost } from "./blog-service.js";

export async function handleSubmit(e, { title, selectedTags, content, reset }) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
        alert("Title and content are required.");
        return;
    }

    const post = { title, tags: selectedTags, content };

    const result = await savePost(post);

    if (!result.ok) {
        alert("Failed to save post. Please try again.");
        return;
    }

    console.log("Post saved:", result.data);

    reset();
}

export default handleSubmit;

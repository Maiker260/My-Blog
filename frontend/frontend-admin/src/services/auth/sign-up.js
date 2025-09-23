const API_URL = import.meta.env.VITE_API_URL;

export async function signUp({ username, password }) {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: username, password }),
    });

    if (!response.ok) throw new Error("Sign Up failed");

    const data = await response.json();
    return data.user;
}

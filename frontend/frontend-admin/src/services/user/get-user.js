const API_URL = import.meta.env.VITE_API_URL;

function hasCookie(name) {
    return document.cookie
        .split(";")
        .some((c) => c.trim().startsWith(name + "="));
}

export async function getUser() {
    if (!hasCookie("accessToken") && !hasCookie("refreshToken")) {
        return null;
    }

    try {
        const response = await fetch(`${API_URL}/auth/me`, {
            method: "GET",
            credentials: "include",
        });

        if (response.status === 401) {
            if (!hasCookie("refreshToken")) {
                return null;
            }

            const refreshed = await fetch(`${API_URL}/auth/refresh`, {
                method: "POST",
                credentials: "include",
            });

            if (!refreshed.ok) {
                return null;
            }

            return getUser();
        }

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (err) {
        console.warn("getUser failed:", err);
        return null;
    }
}

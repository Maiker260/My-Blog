import { dbQuery } from "../db-query.js";

export default async function addUser(user) {
    const args = {
        data: {
            username: user.name,
            password: user.password,
        },
    };

    const newUser = await dbQuery("user", "create", args);

    if (newUser) return { success: true };
}

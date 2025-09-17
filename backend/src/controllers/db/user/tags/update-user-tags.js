import dbQuery from "../../db-query.js";

export default async function updateUserTags(userId, tags) {
    await dbQuery("tag", "deleteMany", {
        where: { userId },
    });

    if (tags.length > 0) {
        await dbQuery("tag", "createMany", {
            data: tags.map((tag) => ({
                name: tag,
                userId,
            })),
            skipDuplicates: true,
        });
    }

    return { success: true };
}

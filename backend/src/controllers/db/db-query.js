import prisma from "./prisma-client.js";

export async function dbQuery(model, request, args) {
    let formattedName;

    if (request === "find") {
        request = "findUnique";
        formattedName = "finding";
    } else {
        formattedName = request.slice(0, -1) + "ing";
    }

    try {
        const data = await prisma[model][request]?.(args);

        return data;
    } catch (err) {
        console.log(`Error ${formattedName} the ${model}:`, err);
        throw err;
    }
}

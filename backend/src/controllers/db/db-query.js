import prisma from "./prisma-client.js";

// Maximum concurrent queries (adjustable for dev/prod)
const MAX_CONCURRENT_QUERIES = process.env.NODE_ENV !== "production" ? 5 : 20;

let queue = [];
let activeQueries = 0;

async function dbQuery(model, request, args) {
    return new Promise((resolve, reject) => {
        const execute = async () => {
            activeQueries++;
            try {
                if (!prisma[model] || !prisma[model][request]) {
                    throw new Error(
                        `Invalid Prisma query: ${model}.${request}`
                    );
                }

                const data = await prisma[model][request](args);
                resolve(data);
            } catch (err) {
                console.error(`Error ${request} the ${model}:`, err);
                reject(err);
            } finally {
                activeQueries--;
                if (queue.length > 0) {
                    const next = queue.shift();
                    next();
                }
            }
        };

        if (activeQueries < MAX_CONCURRENT_QUERIES) {
            execute();
        } else {
            queue.push(execute);
        }
    });
}

export default dbQuery;

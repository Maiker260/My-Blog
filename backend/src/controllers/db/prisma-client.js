import { PrismaClient } from "../../../generated/prisma/index.js";

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

// If used in Development, it will avoid sending many requests each time the server refreshes
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;

    process.once("SIGUSR2", async () => {
        await prisma.$disconnect();
        process.kill(process.pid, "SIGUSR2");
    });
}

export default prisma;

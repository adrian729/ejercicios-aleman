import { PrismaClient } from '@prisma/client';
import { words } from './seed-data';

const prisma = new PrismaClient();
async function main() {
    const result = await Promise.all(words.map(async (word) => {
        const {
            german,
            pronunciation,
            spanish,
            categories,
            invAsociation,
        } = word;

        const values = {
            german,
            pronunciation,
            spanish,
            invAsociation,
            categories: {
                connectOrCreate: categories.map((category) => ({
                    where: { name: category },
                    create: { name: category },
                })),
            },
        };

        const record = await prisma.word.upsert({
            where: {
                translationId: {
                    german: word.german,
                    spanish: word.spanish,
                },
            },
            update: {},
            create: values,
            include: {
                categories: true,
            },
        });

        return record;
    }));
    console.log('Seeds created: ', result);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
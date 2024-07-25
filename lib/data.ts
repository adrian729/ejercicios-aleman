import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type WordId = Prisma.WordGetPayload<{
    select: {
        id: true;
    }
}>;

export type CategoriesWithWords = Prisma.CategoryGetPayload<{
    include: {
        words: true;
    }
}>;

export async function fetchCategoriesWithWords(): Promise<CategoriesWithWords[]> {
    return await prisma.category.findMany({
        include: {
            words: true,
        },
    });

}

// export async function getWordIds(categories: string[] = []): Promise<WordId[]> {

//     const where = categories.length > 0 ?
//         {
//             categories: {
//                 some: {
//                     name: {
//                         in: categories,
//                     },
//                 },
//             },
//         }
//         : {};

//     return await prisma.word.findMany({
//         select: {
//             id: true,
//         },
//         where,
//     });
// }

// export async function getRandomWord(wordIds: WordId[]): Promise<Word | null> {
//     const randomWordId = wordIds[Math.floor(Math.random() * wordIds.length)].id;

//     return await prisma.word.findFirst({
//         where: {
//             id: randomWordId,
//         },
//     });
// }

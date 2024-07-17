import type { WordType } from '@/data/words';
import { words } from '@/data/words';
import type { Category, Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getWordsCategories(words: WordType[]): string[] {
    return words.reduce<string[]>((acc, word) => {
        word.categories.forEach((category) => {
            if (!acc.includes(category)) {
                acc.push(category);
            }
        });
        return acc;
    }, []);
}

async function upsertCategories(categories: string[]): Promise<Category[]> {
    return Promise.all(
        categories.map(async (category) => {
            const record = await prisma.category.upsert({
                where: {
                    name: category,
                },
                update: {},
                create: {
                    name: category,
                },
            });
            return record;
        })
    );
}

type WordWithCategories = Prisma.WordGetPayload<{
    include: {
        categories: true;
    };
}>;

async function upsertWords(words: WordType[]): Promise<WordWithCategories[]> {
    return Promise.all(
        words.map(async (word) => {
            const {
                german,
                pronunciation,
                spanish,
                categories,
                invAsociation,
            } = word;

            const record = await prisma.word.upsert({
                where: {
                    translationId: {
                        german: word.german,
                        spanish: word.spanish,
                    },
                },
                update: {
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
                },
                create: {
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
                },
                include: {
                    categories: true,
                },
            });
            return record;
        })
    );
}

async function populateWords(): Promise<[Category[], WordWithCategories[]]> {
    const categories = await getWordsCategories(words);
    const populatedCategories = await upsertCategories(categories);
    const populatedWords = await upsertWords(words);
    return [populatedCategories, populatedWords];
}

export default async function Home() {
    const [populatedCategories, populatedWords] = await populateWords();

    return (
        <main className="m-20">
            <h1>Ejercicios alemán</h1>
            <p>Ejercicios para aprender alemán</p>

            <div className="border border-black flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg">Categories</h2>
                <ul>
                    {populatedCategories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>

            <div className="border border-black flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg">Words</h2>
                <ul>
                    {populatedWords.map((word) => (
                        <li key={word.id} className="border border-red-500">
                            {word.german} - {word.spanish}
                            <ul>
                                {word.categories.map(({ id, name }) => (
                                    <li key={id}>{name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

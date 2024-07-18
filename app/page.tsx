import type { Category, Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type WordWithCategories = Prisma.WordGetPayload<{
    include: {
        categories: true;
    };
}>;

export default async function Home() {
    const categories: Category[] = await prisma.category.findMany();
    const words: WordWithCategories[] = await prisma.word.findMany({
        include: {
            categories: true,
        },
    });

    return (
        <main className="m-20">
            <h1>Ejercicios alemán</h1>
            <p>Ejercicios para aprender alemán</p>

            <div className="border border-black flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg">Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>

            <div className="border border-black flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg">Words</h2>
                <ul>
                    {words.map((word) => (
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

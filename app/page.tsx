import CategorySelector from '@/components/category-selector';
import WordsTable from '@/components/words-table';
import { getCategoryParam } from '@/lib/params';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function TablasPage({
    searchParams = { category: [] },
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    let categoryParam = getCategoryParam(searchParams?.category);

    const categories = await prisma.category.findMany({
        include: {
            words: true,
        },
    });

    const categoryNames = categories.map((category) => category.name);
    const displayCategories = categories.filter(
        (cat) =>
            categoryParam?.length === 0 || categoryParam.includes(cat.name),
    );

    return (
        <div className="m-auto w-4/6 flex flex-col items-center justify-start gap-4">
            <h1 className="text-xl font-bold">Tablas de vocabulario</h1>

            <CategorySelector categories={categoryNames} />

            <section className="w-full">
                <WordsTable categories={displayCategories} />
            </section>
        </div>
    );
}

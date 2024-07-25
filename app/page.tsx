import CategorySelector from '@/components/category-selector';
import WordsTable, { WordsTableSkeleton } from '@/components/words-table';
import { fetchCategoryNames } from '@/lib/data';
import { Suspense } from 'react';

export default async function TablasPage({
    searchParams,
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    const categoryNames = await fetchCategoryNames();

    return (
        <div className="m-auto w-4/6 flex flex-col items-center justify-start gap-4">
            <h1 className="text-xl font-bold">Tablas de vocabulario</h1>
            <Suspense>
                <CategorySelector categories={categoryNames} />
            </Suspense>

            <section className="w-full">
                <Suspense fallback={<WordsTableSkeleton />}>
                    <WordsTable searchParams={searchParams} />
                </Suspense>
            </section>
        </div>
    );
}

import CategorySelector from '@/components/category-selector';
import WordsTable from '@/components/words-table';
import { getCategoryNames } from '@/lib/category';
import { CategoriesWithWords, fetchCategoriesWithWords } from '@/lib/data';
import { getCategoryParam } from '@/lib/params';

function getDisplayCategories(
    categories: CategoriesWithWords[],
    categoryParam: string[],
): CategoriesWithWords[] {
    return categories.filter(
        (cat) => categoryParam.length === 0 || categoryParam.includes(cat.name),
    );
}

export default async function TablasPage({
    searchParams = { category: [] },
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    const categoryParam = getCategoryParam(searchParams?.category);
    const categories = await fetchCategoriesWithWords();

    const categoryNames = getCategoryNames(categories);
    const displayCategories = getDisplayCategories(categories, categoryParam);

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

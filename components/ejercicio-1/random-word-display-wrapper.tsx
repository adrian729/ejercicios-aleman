import RandomWordDisplay, {
    RandomWordDisplaySkeleton,
} from '@/components/ejercicio-1/random-word-display';
import { CategoryWithWords, fetchCategoriesWithWords } from '@/lib/data';
import { getCategoryParam } from '@/lib/params';
import { Word } from '@prisma/client';

function getDisplayWords(
    categories: CategoryWithWords[],
    categoryParam: string[],
): Word[] {
    return categories
        .filter(
            (cat) =>
                categoryParam?.length === 0 || categoryParam.includes(cat.name),
        )
        .flatMap((cat) => cat.words);
}

export default async function RandomWordDisplayWrapper({
    searchParams = { category: [] },
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    const categoryParam = getCategoryParam(searchParams?.category);
    const categories = await fetchCategoriesWithWords();

    const displayWords = getDisplayWords(categories, categoryParam);

    return (
        <section className="w-2/3">
            <RandomWordDisplay
                key={categoryParam.join('-')}
                words={displayWords}
                initialIndex={Math.floor(
                    (displayWords.length - 1) * Math.random(),
                )}
            />
        </section>
    );
}

export function RandomWordDisplayWrapperSkeleton() {
    return (
        <section className="w-2/3">
            <RandomWordDisplaySkeleton />
        </section>
    );
}

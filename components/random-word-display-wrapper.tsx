import RandomWordDisplay, {
    RandomWordDisplaySkeleton,
} from '@/components/random-word-display';
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

interface RandomWordDisplayWrapperProps {
    searchParams?: {
        category: string | string[];
    };
    variant?: 'german' | 'spanish';
}

export default async function RandomWordDisplayWrapper({
    searchParams = { category: [] },
    variant = 'german',
}: RandomWordDisplayWrapperProps) {
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
                variant={variant}
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

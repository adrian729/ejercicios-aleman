'use client';

import { Badge } from '@/components/ui/badge';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CATEGORY_PARAM = 'category';

export default function CategorySelector({
    categories,
}: {
    categories: string[];
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function toggleCategory(category: string) {
        const params = new URLSearchParams(searchParams);

        const hasCategory = searchParams.has(CATEGORY_PARAM, category);
        if (hasCategory) {
            params.delete(CATEGORY_PARAM, category);
        } else {
            params.append(CATEGORY_PARAM, category);
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <ul className="px-4 py-2 flex gap-2">
            {categories.map((category, idx) => (
                <li key={`cat-${category}-${idx}`}>
                    <Badge
                        className="cursor-pointer px-2 py-1"
                        onClick={() => toggleCategory(category)}
                        variant={
                            searchParams.has(CATEGORY_PARAM, category)
                                ? 'default'
                                : 'secondary'
                        }
                    >
                        {category}
                    </Badge>
                </li>
            ))}
        </ul>
    );
}

import { CategoryWithWords } from '@/lib/data';

export function getCategoryNames(categories: CategoryWithWords[]) {
    return categories.map((category) => category.name);
}
import { CategoriesWithWords } from '@/lib/data';

export function getCategoryNames(categories: CategoriesWithWords[]) {
    return categories.map((category) => category.name);
}
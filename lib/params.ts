export function getCategoryParam(categoryParam?: string | string[]): string[] {
    if (categoryParam === undefined) {
        return [];
    } else if (!(categoryParam instanceof Array)) {
        return [categoryParam];
    } else {
        return categoryParam.filter((cat) => cat !== undefined);
    }
}
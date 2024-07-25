import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CategoryWithWords, fetchCategoriesWithWords } from '@/lib/data';
import { getCategoryParam } from '@/lib/params';
import { Fragment } from 'react';

function getDisplayCategories(
    categories: CategoryWithWords[],
    categoryParam: string[],
): CategoryWithWords[] {
    return categories.filter(
        (cat) => categoryParam.length === 0 || categoryParam.includes(cat.name),
    );
}

export default async function WordsTable({
    searchParams = { category: [] },
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    const categoryParam = getCategoryParam(searchParams?.category);

    const categories = await fetchCategoriesWithWords();
    const displayCategories = getDisplayCategories(categories, categoryParam);

    return (
        <Table className="text-base">
            <TableCaption>
                Lista de palabras en alemán y sus traducciones.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Alemán</TableHead>
                    <TableHead>Pronunciación</TableHead>
                    <TableHead>Español</TableHead>
                    <TableHead>Asociación inverosímil</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {displayCategories.map(({ id, name, words }) => (
                    <Fragment key={`cat-${id}`}>
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center text-sm font-semibold text-muted-foreground bg-muted"
                            >
                                {name}
                            </TableCell>
                        </TableRow>
                        {words.map(
                            ({
                                id: wId,
                                german,
                                spanish,
                                pronunciation,
                                invAsociation,
                            }) => (
                                <TableRow key={`word-${id}-${wId}`}>
                                    <TableCell className="font-bold">
                                        {german}
                                    </TableCell>
                                    <TableCell>
                                        {pronunciation ?? '-'}
                                    </TableCell>
                                    <TableCell>{spanish}</TableCell>
                                    <TableCell>
                                        {invAsociation ?? '-'}
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    );
}

export function WordsTableSkeleton() {
    return (
        <Table className="text-base">
            <TableCaption>
                Lista de palabras en alemán y sus traducciones.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Alemán</TableHead>
                    <TableHead>Pronunciación</TableHead>
                    <TableHead>Español</TableHead>
                    <TableHead>Asociación inverosímil</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell colSpan={4} className="text-center">
                        Cargando...
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

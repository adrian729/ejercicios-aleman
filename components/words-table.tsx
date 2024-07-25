import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Prisma } from '@prisma/client';
import { Fragment } from 'react';

type CategoryWithWords = Prisma.CategoryGetPayload<{
    include: {
        words: true;
    };
}>;

export default function WordsTable({
    categories,
}: {
    categories: CategoryWithWords[];
}) {
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
                {categories.map(({ id, name, words }) => (
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

'use client';

import SecretText from '@/components/ejercicio-1/secret-text';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

interface WordCardProps {
    german: string;
    spanish: string;
    pronunciation: string | null;
    invAsociation: string | null;
}

export default function WordCard({
    german,
    spanish,
    pronunciation,
    invAsociation,
}: WordCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{german}</CardTitle>
                {pronunciation && (
                    <CardDescription className="italic text-sm">
                        <SecretText text={pronunciation} variant="muted" />
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <span className="text-xs text-muted-foreground">español</span>
                <p className="font-semibold">
                    <SecretText text={spanish} />
                </p>
                {invAsociation && (
                    <>
                        <span className="text-xs text-muted-foreground">
                            asociación inverosímil
                        </span>
                        <p className="italic text-sm">
                            <SecretText text={invAsociation} variant="muted" />
                        </p>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

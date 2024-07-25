'use client';

import SecretText from '@/components/secret-text';
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
    variant = 'german',
    ...props
}: WordCardProps & { variant?: 'german' | 'spanish' }) {
    return variant === 'spanish' ? (
        <WordCardSpanish {...props} />
    ) : (
        <WordCardGerman {...props} />
    );
}

export function WordCardGerman({
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

export function WordCardSpanish({
    german,
    spanish,
    pronunciation,
    invAsociation,
}: WordCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{spanish}</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-xs text-muted-foreground">alemán</span>
                <p className="font-semibold">
                    <SecretText text={german} />
                </p>
                {pronunciation && (
                    <>
                        <p className="pt-1 italic text-sm">
                            <SecretText text={pronunciation} variant="muted" />
                        </p>
                    </>
                )}
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

export function WordCardSkeleton({
    variant = 'german',
}: {
    variant?: 'german' | 'spanish';
}) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    <SecretText text="skeletonTitle" disabled />
                </CardTitle>
                {variant === 'german' && (
                    <CardDescription className="italic text-sm">
                        <SecretText text="skeletonTitle" disabled />
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <span className="text-xs text-muted-foreground">español</span>
                <p className="font-semibold">
                    <SecretText text="skeletonSpanish" disabled />
                </p>
                {variant !== 'german' && (
                    <>
                        <span className="text-xs text-muted-foreground">
                            pronunciación
                        </span>
                        <p>
                            <SecretText text="skeletonTitle" disabled />
                        </p>
                    </>
                )}
                <span className="text-xs text-muted-foreground">
                    asociación inverosímil
                </span>
                <p className="italic text-sm">
                    <SecretText text="skeleton inv asociation TEXT" disabled />
                </p>
            </CardContent>
        </Card>
    );
}

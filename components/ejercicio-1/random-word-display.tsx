'use client';

import WordCard, { WordCardSkeleton } from '@/components/ejercicio-1/word-card';
import { ArchiveInfo } from '@/components/icons/archive-icon';
import { Button } from '@/components/ui/button';
import { Word } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';

function getNextWord(
    currentIndex: number,
    displayWords: Word[],
    setCurrentWordIndex: Dispatch<SetStateAction<number | null>>,
): void {
    if (currentIndex === null) {
        return;
    }

    setCurrentWordIndex((prevIndex) => {
        if (displayWords.length === 0) {
            return null;
        }

        if (displayWords.length === 1) {
            return prevIndex;
        }

        let newIndex = Math.floor((displayWords.length - 1) * Math.random());
        while (prevIndex === newIndex) {
            newIndex = Math.floor((displayWords.length - 1) * Math.random());
        }

        return newIndex;
    });
}

function archiveWordAndGetNext(
    currentIndex: number,
    setDisplayWords: Dispatch<SetStateAction<Word[]>>,
    setArchivedWords: Dispatch<SetStateAction<Word[]>>,
    setCurrentWordIndex: Dispatch<SetStateAction<number | null>>,
): void {
    if (currentIndex === null || currentIndex < 0) {
        return;
    }

    setDisplayWords((prevWords) => {
        if (currentIndex >= prevWords.length || prevWords.length === 0) {
            return prevWords;
        }

        setArchivedWords((prevArchivedWords) => [
            ...prevArchivedWords,
            prevWords[currentIndex],
        ]);

        const newDisplayWords = [
            ...prevWords.slice(0, currentIndex),
            ...prevWords.slice(currentIndex + 1),
        ];
        setCurrentWordIndex(
            newDisplayWords.length > 0
                ? Math.floor((newDisplayWords.length - 1) * Math.random())
                : null,
        );

        return newDisplayWords;
    });
}

function resetExercise(
    archivedWords: Word[],
    setDisplayWords: Dispatch<SetStateAction<Word[]>>,
    setArchivedWords: Dispatch<SetStateAction<Word[]>>,
    setCurrentWordIndex: Dispatch<SetStateAction<number | null>>,
) {
    setDisplayWords((prevWords) => {
        const newDisplayWords = [...prevWords, ...archivedWords];
        setCurrentWordIndex(
            newDisplayWords.length > 0
                ? Math.floor((newDisplayWords.length - 1) * Math.random())
                : null,
        );
        return newDisplayWords;
    });
    setArchivedWords([]);
}

interface RandomWordDisplayProps {
    words: Word[];
    initialIndex: number;
}
export default function RandomWordDisplay({
    words,
    initialIndex,
}: RandomWordDisplayProps) {
    const [displayWords, setDisplayWords] = useState<Word[]>(words);
    const [archivedWords, setArchivedWords] = useState<Word[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState<number | null>(
        initialIndex,
    );

    if (currentWordIndex === null || displayWords.length === 0) {
        return (
            <section>
                <div className="py-2 flex justify-between items-center gap-2">
                    <Button
                        onClick={() =>
                            resetExercise(
                                archivedWords,
                                setDisplayWords,
                                setArchivedWords,
                                setCurrentWordIndex,
                            )
                        }
                    >
                        Repetir ejercicio
                    </Button>
                </div>
                <p>¡Felicidades! No quedan palabras por aprender.</p>
            </section>
        );
    }

    const { german, spanish, pronunciation, invAsociation } =
        displayWords[currentWordIndex];

    return (
        <>
            <div className="py-2 flex justify-between items-center gap-2">
                <Button
                    onClick={() =>
                        getNextWord(
                            currentWordIndex,
                            displayWords,
                            setCurrentWordIndex,
                        )
                    }
                >
                    Próxima palabra
                </Button>
                <Button
                    onClick={() =>
                        archiveWordAndGetNext(
                            currentWordIndex,
                            setDisplayWords,
                            setArchivedWords,
                            setCurrentWordIndex,
                        )
                    }
                    variant="outline"
                >
                    <span className="w-6 pr-1 inline-block">
                        <ArchiveInfo />
                    </span>
                    Archivar palabra
                </Button>
            </div>
            <WordCard
                key={`word-${currentWordIndex}-${german}-${spanish}`}
                german={german}
                spanish={spanish}
                pronunciation={pronunciation}
                invAsociation={invAsociation}
            />
        </>
    );
}

export function RandomWordDisplaySkeleton() {
    return (
        <>
            <div className="py-2 flex justify-between items-center gap-2">
                <Button variant="secondary" className="cursor-not-allowed">
                    Próxima palabra
                </Button>
                <Button variant="secondary" className="cursor-not-allowed">
                    <span className="w-6 pr-1 inline-block">
                        <ArchiveInfo />
                    </span>
                    Archivar palabra
                </Button>
            </div>
            <WordCardSkeleton />
        </>
    );
}

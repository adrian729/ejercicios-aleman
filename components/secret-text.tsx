import { cn } from '@/lib/utils';
import { HTMLAttributes, useState } from 'react';

type SecretTextVariant = 'default' | 'muted';

const secretTextVariants = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
};

export interface SecretTextProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    variant?: SecretTextVariant;
    disabled?: boolean;
}

export default function SecretText({
    className,
    text,
    variant = 'default',
    disabled = false,
}: SecretTextProps) {
    const [hideText, setHideText] = useState<boolean>(true);
    return (
        <span
            className={cn(
                'w-full cursor-pointer',
                secretTextVariants[variant],
                (hideText || disabled) &&
                    'inline-block text-foreground bg-foreground select-none',
                className,
            )}
            onClick={() => {
                setHideText(!hideText);
            }}
        >
            {text}
        </span>
    );
}

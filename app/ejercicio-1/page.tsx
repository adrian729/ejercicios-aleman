import CategorySelector from '@/components/category-selector';
import RandomWordDisplayWrapper, {
    RandomWordDisplayWrapperSkeleton,
} from '@/components/ejercicio-1/random-word-display-wrapper';
import { InfoIcon } from '@/components/icons/info-icon';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { fetchCategoryNames } from '@/lib/data';
import { Suspense } from 'react';

export default async function Ejercicio1Page({
    searchParams,
}: {
    searchParams?: {
        category: string | string[];
    };
}) {
    const categoryNames = await fetchCategoryNames();

    return (
        <div className="m-auto w-4/6 flex flex-col items-center justify-start gap-4">
            <h1 className="text-xl font-bold">
                Ejercicio de repaso alemán-español
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="w-5 pl-1 inline-block cursor-pointer">
                                <InfoIcon hideTitle />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="text-sm text-muted-foreground font-normal flex flex-col gap-1">
                                <p>
                                    Este ejercicio de repaso te mostrará
                                    palabras aleatorias en alemán y español, que
                                    podrás filtrar por categorías.
                                </p>
                                <p>
                                    Piensa en la pronunciación y significado de
                                    la palabra en español y haz clic en las
                                    zonas oculas para comprobar si has acertado.
                                </p>
                                <p>
                                    Si necesitas ayuda haz clic en la asociación
                                    inverosímil para darte un empujón.
                                </p>
                                <p>
                                    Haz clic en {'"Próxima palabra"'} para
                                    avanzar a la siguiente palabra, o en
                                    {' "Archivar"'} para que la palabra actual
                                    no se muestre de nuevo.
                                </p>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </h1>

            <Suspense>
                <CategorySelector categories={categoryNames} />
            </Suspense>

            <Suspense fallback={<RandomWordDisplayWrapperSkeleton />}>
                <RandomWordDisplayWrapper searchParams={searchParams} />
            </Suspense>
        </div>
    );
}

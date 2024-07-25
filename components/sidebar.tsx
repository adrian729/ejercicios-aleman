import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

export default function Sidebar() {
    return (
        <NavigationMenu
            className="w-fit bg-primary text-primary-foreground shadow shadow-foreground"
            orientation="vertical"
        >
            <NavigationMenuList
                orientation="vertical"
                className="px-4 md:px-8 lg:px-12 py-4 md:py-8 w-full"
            >
                <NavigationMenuItem className="w-full">
                    <Link href="/" passHref legacyBehavior>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                'w-full bg-primary text-primary-foreground justify-start',
                            )}
                        >
                            Tablas
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                    <NavigationMenuTrigger className="w-full bg-primary text-primary-foreground justify-start">
                        Ejercicios
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="relative">
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that
                                            you can copy and paste into your
                                            apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/ejercicio-1" title="Ejercicio 1">
                                Ejercicio de repaso pronunciación y
                                alemán-español.
                            </ListItem>
                            <ListItem href="/ejercicio-2" title="Ejercicio 2">
                                Ejercicio de repaso español-alemán.
                            </ListItem>
                            <ListItem href="/ejercicio-3" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

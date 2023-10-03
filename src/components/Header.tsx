//ui
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../@/components/ui/navigation-menu"
//icon
import {Laptop, Goal, PencilRuler, Heart, Contact} from "lucide-react";


const Header = () => {
    return (
        <div id={"header-container"} className={"flex justify-around p-10 items-center border-b border-b-accent fixed left-0 right-0 z-10 bg-white"}>
            <a href="/" className={"p-3"}>ITH Kagnana</a>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className={"p-3"}>
                        <NavigationMenuTrigger>À propos de moi</NavigationMenuTrigger>
                        <NavigationMenuContent className={"flex flex-col items-start"}>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Goal absoluteStrokeWidth/> Mon parcours</NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Laptop absoluteStrokeWidth/> Pourquoi l'informatique ?</NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><PencilRuler absoluteStrokeWidth/> Mes projets personnels</NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Heart absoluteStrokeWidth/> Mes intérêts</NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Contact absoluteStrokeWidth/>Curiculum Vitae</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        Mes compétences
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <a href={"#projet"}>Mes projets de BTS</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        Ma veille technologique
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Header
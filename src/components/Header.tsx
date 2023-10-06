import {HashLink as Link} from "react-router-hash-link";
//ui
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../@/components/ui/dropdown-menu"

//icon
import {Laptop, Goal, PencilRuler, Contact, Github, Linkedin, Menu} from "lucide-react";


const Header = () => {
    return (
        <div id={"header-container"} className={"flex w-full justify-around p-1 items-center border-b border-b-accent fixed left-0 right-0 z-10 bg-[#FBFBFE]"}>
            <Link to="/" className={"title-section text-lg lg:text-xl"}>ITH Kagnana</Link>
            <NavigationMenu className={"hidden lg:flex"}>
                <NavigationMenuList>
                    <NavigationMenuItem className={"p-3"}>
                        <NavigationMenuTrigger className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}> <Link to={"/a-propos#about"}>À propos de moi</Link></NavigationMenuTrigger>
                        <NavigationMenuContent className={"flex flex-col items-start "}>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Goal absoluteStrokeWidth/> <Link to={"/a-propos#mon-parcours"}>Mon parcours</Link> </NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Laptop absoluteStrokeWidth/> <Link to={"/a-propos#pourquoi-informatique"}>Pourquoi l'informatique ?</Link> </NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><PencilRuler absoluteStrokeWidth/> Mes projets personnels</NavigationMenuLink>
                            <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-64"}><Contact absoluteStrokeWidth/>Curiculum Vitae</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <Link to={"/accueil#mon-profil"}>Mon profil</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <Link to={"/accueil#competences"}>Mes compétences</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <Link to={"/accueil#projet"}>Mes projets de BTS</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        Ma veille technologique
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className={"flex justify-center items-center gap-5 ml-5"}>
                    <a href={"https://github.com/Kazeynma"} target={"_blank"}><Github/></a>
                    <a href={"https://www.linkedin.com/in/kagnana-ith/"} target={"_blank"}><Linkedin/></a>
                </div>
            </NavigationMenu>
            <div className={"lg:hidden flex items-center"}>
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu absoluteStrokeWidth/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}><Link to={"/a-propos#about"}>À propos de moi</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={"/accueil#mon-profil"}>Mon profil</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={"/accueil#competences"}>Mes compétences</Link></DropdownMenuItem>
                        <DropdownMenuItem>Ma veille technologique</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    )
}

export default Header
import { HashLink as Link } from "react-router-hash-link";
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
import { Goal, Contact, Github, Linkedin, Menu, FolderOpen, BookOpen, CheckCircle, Briefcase, Star } from "lucide-react";


const Header = () => {
    return (
        <div id={"header-container"} className={"flex w-full justify-around p-1 items-center border-b border-b-accent fixed left-0 right-0 z-10 bg-[#FBFBFE]"}>
            <Link to="/" className={"title-section text-lg lg:text-xl"}>ITH Kagnana</Link>
            <NavigationMenu className={"hidden lg:flex"}>
                <NavigationMenuList>
                    <NavigationMenuItem className={"p-3"}>
                        <NavigationMenuTrigger className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}> <Link to={"/a-propos#about"}>À propos de moi</Link></NavigationMenuTrigger>
                        <NavigationMenuContent className={"flex flex-col items-start"}>
                            <div className={"w-80"}>
                                <Link className={"w-full"} to={"/a-propos#parcours"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><Goal absoluteStrokeWidth /> Parcours scolaire</NavigationMenuLink></Link>
                                <Link className={"w-full"} to={"/a-propos#alternance"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><Briefcase absoluteStrokeWidth /> Alternance </NavigationMenuLink></Link>
                                {/* <NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><PencilRuler absoluteStrokeWidth /> Projets personnels</NavigationMenuLink> */}
                                <Link className={"w-full"} to={"/a-propos#competences"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><Star absoluteStrokeWidth />Mes compétences</NavigationMenuLink></Link>
                                <Link className={"w-full"} to={"/a-propos#curiculum-vitae"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><Contact absoluteStrokeWidth />Curiculum Vitae</NavigationMenuLink></Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <NavigationMenuTrigger className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}> <Link to={"/BTS#bts"}>BTS SIO</Link></NavigationMenuTrigger>
                        <NavigationMenuContent className={"flex flex-col items-start"}>
                            <div className={"w-80"}>
                                <Link className={"w-full"} to={"/BTS#projet"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><FolderOpen absoluteStrokeWidth /> Projets </NavigationMenuLink></Link>
                                <Link className={"w-full"} to={"/BTS#veille-technologique"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><BookOpen absoluteStrokeWidth /> Veille technologique </NavigationMenuLink></Link>
                                <Link className={"w-full"} to={"/BTS#tableau-competence"}><NavigationMenuLink className={"p-3 hover:bg-accent flex gap-2 items-center w-full"}><CheckCircle absoluteStrokeWidth />Tableau de compétence</NavigationMenuLink></Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <Link to={"/accueil#mon-profil"}>Introduction</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={"p-3"}>
                        <Link to={"/accueil#mon-bts"}>Mon but</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <div className={"flex justify-center items-center gap-5 ml-5"}>
                    <a href={"https://github.com/Kazeynma"} target={"_blank"}><Github /></a>
                    <a href={"https://www.linkedin.com/in/kagnana-ith/"} target={"_blank"}><Linkedin /></a>
                </div>
            </NavigationMenu>
            <div className={"lg:hidden flex items-center"}>
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu absoluteStrokeWidth /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}><Link to={"/a-propos#about"}>À propos de moi</Link></DropdownMenuItem>
                        <DropdownMenuItem className={"bg-[#FBFBFE] text-[#6E58E0] font-bold hover:text-[#6E58E0]"}><Link to={"/BTS#bts"}>Mon BTS</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={"/accueil#mon-profil"}>Mon profil</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={"/accueil#mon-bts"}>Mon but</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div >
    )
}

export default Header
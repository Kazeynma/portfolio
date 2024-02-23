//ui
import {Separator} from "../@/components/ui/separator.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../@/components/ui/hover-card.tsx"
import {Button} from "../@/components/ui/button.tsx";
//component
import CompetenceCard from "../components/CompetenceCard.tsx";
//icon
import {icons} from "../data/iconsImports.ts";
import {InfoIcon} from "lucide-react";
const Competences = () => {
    return (
        <div id={"competences"} className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10"}>
            <h2 className={"title-section"}>
                Mes compétences
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button className={"px-1"} variant={"ghost"}><InfoIcon/></Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className={"font-normal text-lg"}>
                            Petite légende d'étoiles
                            <ul>
                                <li>1 étoile : Débutant</li>
                                <li>2 étoiles : Intermédiaire</li>
                                <li>3 étoiles : Expert</li>
                            </ul>
                            Passez votre souris sur les compétences pour avoir le nombre de projets qui ont été fait en lien
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </h2>
            <section  className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Langage</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"Javascript"}
                        img={icons.javascript}
                        content={"Intermédiaire"}
                        level={1}
                    />
                    <CompetenceCard
                        title={"Typescript"}
                        img={icons.typescript}
                        content={"Intermédiaire"}
                        level={1}
                    />
                    <CompetenceCard
                        title={"Java"}
                        img={icons.java}
                        content={"Débutant"}
                        level={0}
                    />
                    <CompetenceCard
                        title={"Swift"}
                        img={icons.swift}
                        content={"Intermédiaire"}
                        level={1}
                    />

                    <CompetenceCard
                        title={"C#"}
                        img={icons.cSharp}
                        content={"Débutant"}
                        level={0}
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"framework"} className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Framework/Librairie</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"ReactJS"}
                        img={icons.react}
                        content={"Intermédiaire"}
                        level={1}
                    />
                    <CompetenceCard
                        title={"SwiftUI"}
                        img={icons.swiftUi}
                        content={"Intermédiaire"}
                        level={1}
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"framework"} className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>SGBD</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"MongoDB"}
                        img={icons.mongoDB}
                        content={"Intermédiaire"}
                        level={1}
                    />
                    <CompetenceCard
                        title={"MySQL"}
                        img={icons.mySQL}
                        content={"Débutant"}
                        level={0}
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"outil"} className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Outils</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"Git"}
                        img={icons.git}
                        content={"Intermédiaire"}
                        level={1}
                    />
                    <CompetenceCard
                        title={"Docker"}
                        img={icons.docker}
                        content={"Débutant"}
                        level={0}
                    />
                </div>
            </section>
        </div>
    )
}
export default Competences
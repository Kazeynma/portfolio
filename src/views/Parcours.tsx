import { HashLink as Link } from "react-router-hash-link";
//ui
import { Button } from "../@/components/ui/button.tsx";
import { Separator } from "../@/components/ui/separator.tsx";
//component
import ParcoursCard from "../components/ParcoursCard.tsx";
import MParcoursCardRight from "../components/parcours/MParcoursCardRight.tsx";
const Parcours = () => {
    return (
        <div id={"parcours"} className={"min-h-screen flex flex-col justify-center items-center relative gap-5"}>
            <h2 className={"title-section"}>Parcours scolaire</h2>
            <div id={"pc-view"} className={"w-2/3 gap-5 hidden lg:flex"}>
                <div className={"w-1/2 flex flex-col"}>
                    <ParcoursCard
                        title={"BTS SIO SLAM"}
                        description={"ISITECH - 2022/2024"}
                        content={
                            <div className="flex flex-col">
                                <span className="text-[15px]">Parcours en apprentissage avec un rythme 3 semaines entreprise, 2 semaines école</span>
                                <Button className={"bg-[#6e58e0] hover:bg-[#443784] m-1"}><Link to="/accueil#alternance" >Mon alternance →</Link></Button>
                            </div>
                        }
                        orientation={"left"}
                    />

                    <ParcoursCard title={""} description={""} className={"invisible"} />
                    <ParcoursCard
                        title={"Baccalauréat "}
                        description={"Lycée Arbez Carme"}
                        content={
                            <>
                                <p className={"font-semibold text-[#6e58e0]"}>Obtention du BAC général avec les spécialités MATHS/SVT</p>
                                <p className={"italic text-[14px]"}>Option NSI (Numérique Science de l'Informatique) en première</p>
                            </>
                        }
                        orientation={"left"}
                    />

                </div>
                <Separator orientation={"vertical"} className={"w-0.5 py-72 h-full bg-[#6E58E0]"} />
                <div className={"w-1/2 flex flex-col gap-4"}>
                    <ParcoursCard title={""} description={""} className={"invisible h-[200px]"} />
                    <ParcoursCard
                        title={"Première année de licence LEA anglais - coréen"}
                        description={"Université Lyon 3 - 2021/2022"}
                        content={
                            <><span className="text-[15px]">Apprentissage de la langue et de culture coréenne et anglaise avec des notions commerciales et juridiques</span></>
                        }
                        orientation={"right"}
                    />
                </div>
            </div>
            <div id={"mobile-view"} className={"flex w-full lg:hidden"}>
                <div className={"flex flex-col items-center justify-center w-full"}>
                    <MParcoursCardRight titre={"BTS SIO - SLAM"} desc={"ISITECH - 2022/2024"} content={
                        <>
                            <span>Alternance : </span>
                            <ul>
                                <li> - Partner Formation - Isitech </li>
                                <li> - Wimova </li>
                            </ul>
                        </>
                    } />
                    <MParcoursCardRight titre={"LEA anglais - coréen"} desc={"Lyon 3 - 2021/2022"} content={"Apprentissage de l'anglais économique et juridique ainsi que de la culture coréenne"} />
                    <MParcoursCardRight titre={"BAC Général"} desc={"Lycée arbez Carme - 2018/2021"} content={"Spécialité MATHS/SVT mention Bien"} />
                </div>
            </div>
        </div>
    )
}

export default Parcours
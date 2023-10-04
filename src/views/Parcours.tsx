//ui
import {Separator} from "../@/components/ui/separator.tsx";
//component
import ParcoursCard from "../components/ParcoursCard.tsx";
const Parcours = () => {
    return (
        <div id={"mon-parcours"} className={"min-h-screen flex flex-col justify-center items-center relative"}>
            <span className={"text-3xl m-2 mt-24"}>Mon parcours</span>
            <div className={"w-2/3 flex gap-5"}>
                <div className={"w-1/2 flex flex-col"}>
                    <ParcoursCard
                        title={"BTS SIO SLAM"}
                        description={"ISITECH - 2022/2024"}
                        content={
                            <>
                                <ul>
                                    <li className={"font-bold"}>Première année de BTS en alternance chez Partner Formation - Isitech</li>
                                    <span className={"italic ml-5"}>Apprentie développeur web MERN (Mongo Express React Node)</span>
                                    <li className={"font-bold"}>Deuxième année de BTS en alternance chez Wimova</li>
                                    <span className={"italic ml-5"}>Apprentie développeur iOS</span>
                                </ul>
                            </>
                        }
                        orientation={"left"}
                    />

                    <ParcoursCard title={""} description={""} className={"invisible"}/>
                    <ParcoursCard
                        title={"Baccalauréat "}
                        description={"Lycée Arbez Carme"}
                        content={
                            <>
                                <p className={"font-semibold text-green-600"}>Obtention du BAC général avec les spécialités MATHS/SVT</p>
                                <p className={"italic text-[14px]"}>Option NSI (Numérique Science de l'Informatique) en première</p>
                            </>
                        }
                        orientation={"left"}
                    />

                </div>
                <Separator orientation={"vertical"} decorative className={"w-0.5"}/>
                <div className={"w-1/2 flex flex-col gap-4"}>
                    <ParcoursCard title={""} description={""} className={"invisible h-[200px]"}/>
                    <ParcoursCard
                        title={"Première année de licence LEA anglais - coréen"}
                        description={"Université Lyon 3 - 2021/2022"}
                        content={
                            <><span>Apprentissage de l'anglais économique et juridique ainsi que la langue ainis que l'histoire coréenne</span></>
                        }
                        orientation={"right"}
                    />
                </div>
            </div>

        </div>
    )
}

export default Parcours
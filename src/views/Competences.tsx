//ui
import {Separator} from "../@/components/ui/separator.tsx";
//component
import CompetenceCard from "../components/CompetenceCard.tsx";
//icon
import reactIcon from "../assets/React-icon.svg.png"
import jsLogo from "../assets/JavaScript-logo.png"
import tsLogo from "../assets/TypeScript-logo.png"
import javaLogo from "../assets/Java_Logo.svg.png"
import gitLogo from "../assets/Git-logo.png"
import dockerLogo from "../assets/docker-logo.svg"

const Competences = () => {
    return (
        <div id={"competences"} className={"min-h-screen flex justify-center items-center flex-col gap-5"}>
            <span className={"text-3xl"}>Mes compétences</span>
            <section id={"langage"} className={"flex flex-col w-4/5"}>
                <span className={"my-2 text-xl"}>Langage</span>
                <div className={"flex flex-wrap justify-evenly"}>
                    <CompetenceCard
                        title={"Javascript"}
                        img={jsLogo}
                        content={
                            <p className={"text-center"}>Utilisation dans le cadre professionnel et personnel</p>
                        }
                    />
                    <CompetenceCard
                        title={"Typescript"}
                        img={tsLogo}
                        content={
                            <p className={"text-center"}>Utilisation dans le cadre de projet</p>
                        }
                    />
                    <CompetenceCard
                        title={"Java"}
                        img={javaLogo}
                        content={
                        <p className={"text-center"}>Utilisation dans le cadre de projet</p>
                    }
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"framework"} className={"flex flex-col w-4/5"}>
                <span className={"my-2 text-xl"}>Framework/Librairie</span>
                <div className={"flex flex-wrap justify-evenly"}>
                    <CompetenceCard
                        title={"ReactJS"}
                        img={reactIcon}
                        content={
                            <p className={"text-center"}>Utilisation dans le cadre professionnel et personnel</p>
                        }
                    />
                </div>
            </section>
            <section id={"outil"} className={"flex flex-col w-4/5"}>
                <span className={"my-2 text-xl"}>Outils</span>
                <div className={"flex flex-wrap justify-evenly"}>
                    <CompetenceCard
                        title={"Git"}
                        img={gitLogo}
                        content={
                            <p className={"text-center"}>Utilisation dans tous mes projets avec Github</p>
                        }
                    />
                    <CompetenceCard
                        title={"Docker"}
                        img={dockerLogo}
                        content={
                            <p className={"text-center"}>Apprentissage de la technologie</p>
                        }
                    />
                </div>
            </section>
        </div>
    )
}
export default Competences
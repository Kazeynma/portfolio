//ui
import {Separator} from "../@/components/ui/separator.tsx";
//component
import CompetenceCard from "../components/CompetenceCard.tsx";
//icon
import reactIcon from "../assets/React-icon.svg.png"
import jsLogo from "../assets/JavaScript-logo.png"
import tsLogo from "../assets/TypeScript-logo.png"
import javaLogo from "../assets/Java_Logo.svg"
import swiftLogo from "../assets/swift.png"
import swiftUiLogo from "../assets/swiftui.png"
import gitLogo from "../assets/Git-logo.png"
import dockerLogo from "../assets/docker-logo.svg"

const Competences = () => {
    return (
        <div id={"competences"} className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10"}>
            <h2 className={"title-section"}>Mes compétences</h2>
            <section  className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Langage</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"Javascript"}
                        img={jsLogo}
                        content={"Utilisation dans le cadre professionnel et personnel"}
                    />
                    <CompetenceCard
                        title={"Typescript"}
                        img={tsLogo}
                        content={"Utilisation dans le cadre de projet"}
                    />
                    <CompetenceCard
                        title={"Java"}
                        img={javaLogo}
                        content={"Utilisation dans le cadre de projet"}
                    />
                    <CompetenceCard
                        title={"Swift"}
                        img={swiftLogo}
                        content={"Utilisation dans le cadre professionnel"}
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"framework"} className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Framework/Librairie</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"ReactJS"}
                        img={reactIcon}
                        content={"Utilisation dans le cadre professionnel et personnel"}
                    />
                    <CompetenceCard
                        title={"SwiftUI"}
                        img={swiftUiLogo}
                        content={"Utilisation dans le cadre professionnel"}
                    />
                </div>
            </section>
            <Separator className={"w-2/3"}/>
            <section id={"outil"} className={"flex flex-col w-4/5"}>
                <span className={"text-lg"}>Outils</span>
                <div className={"flex flex-wrap justify-center gap-5"}>
                    <CompetenceCard
                        title={"Git"}
                        img={gitLogo}
                        content={"Utilisation dans tous mes projets avec Github"}
                    />
                    <CompetenceCard
                        title={"Docker"}
                        img={dockerLogo}
                        content={"Apprentissage de la technologie"}
                    />
                </div>
            </section>
        </div>
    )
}
export default Competences
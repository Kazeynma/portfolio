import { useState } from "react";
//component
import CompetenceCard from "../components/CompetenceCard.tsx";
import CompetenceBox from "../components/CompetenceBox.tsx";
//icon
import { icons } from "../data/iconsImports.ts";


const Competences = () => {
    const [showLevelLang, setShowLevelLang] = useState(false)
    const [showLevelFram, setShowLevelFram] = useState(false)
    const [showLevelSGBD, setShowLevelSGBD] = useState(false)
    const [showLevelOutil, setShowLevelOutil] = useState(false)

    return (
        <div id={"competences"} className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10"}>
            <h2 className={"title-section"}>
                Mes compétences
            </h2>
            <span>Passez votre souris pour voir le niveau de compétences</span>
            <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                <CompetenceBox
                    showLevel={showLevelLang}
                    setShowLevel={setShowLevelLang}
                    title="Langage"
                    content={
                        <>
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.javascript}
                                title="Javascript"
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.typescript}
                                title="Typescript"
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.swift}
                                title="Swift"
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.java}
                                title="Java"
                                level={0}
                            />
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.cSharp}
                                title="C#"
                                level={0}
                            />
                            <CompetenceCard
                                showLevel={showLevelLang}
                                img={icons.php}
                                title="PHP"
                                level={0}
                            />
                        </>
                    }
                />
                <CompetenceBox
                    showLevel={showLevelFram}
                    setShowLevel={setShowLevelFram}
                    title="Framework/Librairie"
                    content={
                        <>
                            <CompetenceCard
                                showLevel={showLevelFram}
                                title={"ReactJS"}
                                img={icons.react}
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelFram}
                                title={"SwiftUI"}
                                img={icons.swiftUi}
                                level={1}
                            />
                        </>
                    }
                />
                <CompetenceBox
                    showLevel={showLevelSGBD}
                    setShowLevel={setShowLevelSGBD}
                    title="SGBD"
                    content={
                        <>
                            <CompetenceCard
                                showLevel={showLevelSGBD}
                                title={"MongoDB"}
                                img={icons.mongoDB}
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelSGBD}
                                title={"MySQL"}
                                img={icons.mySQL}
                                level={0}
                            />
                        </>
                    }
                />
                <CompetenceBox
                    showLevel={showLevelOutil}
                    setShowLevel={setShowLevelOutil}
                    title="Outils"
                    content={
                        <>
                            <CompetenceCard
                                showLevel={showLevelOutil}
                                title={"Git"}
                                img={icons.git}
                                level={1}
                            />
                            <CompetenceCard
                                showLevel={showLevelOutil}
                                title={"Docker"}
                                img={icons.docker}
                                level={0}
                            />
                        </>
                    }
                />
            </div>
        </div>
    )
}
export default Competences
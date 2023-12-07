import Header from "../components/Header.tsx";
import "../animations.css"
//views
import Parcours from "./Parcours.tsx";
const AboutMe = () => {
    return (
        <div id={"about-container"}>
            <Header/>
            <div id={"about"} className={"min-h-screen flex justify-center items-center gap-1"}>
                <h2 className={"animate-fade-down animate-once text-3xl surlignedTitle"}>À propos de moi</h2>
            </div>
            <Parcours/>
        </div>
    )
}

export default AboutMe
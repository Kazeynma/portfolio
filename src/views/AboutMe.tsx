import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "../animations.css"
//views
import Parcours from "./Parcours.tsx";
import Alternance from "./Alternance.tsx";
import Competences from "./Competences.tsx";
import CuriculumVitae from "./CuriculumVitae.tsx";
const AboutMe = () => {
    return (
        <div id={"about-container"} className="flex flex-col">
            <Header />
            <div id={"about"} className={"min-h-screen flex justify-center items-center gap-1"}>
                <h2 className={"animate-fade-down animate-once text-3xl surlignedTitle"}>À propos de moi</h2>
            </div>
            <Parcours />
            <Alternance />
            <Competences />
            <CuriculumVitae />
            <Footer />
        </div>
    )
}

export default AboutMe
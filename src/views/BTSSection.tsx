import Projects from "./Projects.tsx";
import VeilleTechno from "./VeilleTechno.tsx";
import Header from "../components/Header.tsx";
const BTSSection = () => {
    return (
        <div id={"bts-container"}>
            <Header/>
            <div id={"bts"} className={"min-h-screen flex justify-center items-center gap-1"}>
                <h2 className={"animate-fade-down animate-once text-3xl surlignedTitle"}>MON BTS SIO</h2>
            </div>
            <Projects/>
            <VeilleTechno/>
        </div>
    )
}

export default BTSSection
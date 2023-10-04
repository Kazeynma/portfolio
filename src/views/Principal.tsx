//views
import Presentation from "./Presentation.tsx";
import Competences from "./Competences.tsx";
import Projects from "./Projects.tsx";
import Header from "../components/Header.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header/>
            <Presentation/>
            <Competences/>
            <Projects/>
        </div>
    )
}

export default Principal
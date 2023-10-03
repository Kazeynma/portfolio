//views
import Presentation from "./Presentation.tsx";
import Projects from "./Projects.tsx";
import Header from "../components/Header.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header/>
            <Presentation/>
            <Projects/>
        </div>
    )
}

export default Principal
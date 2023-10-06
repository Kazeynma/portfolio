//views
import Presentation from "./Presentation.tsx";
import Competences from "./Competences.tsx";
import Projects from "./Projects.tsx";
import Header from "../components/Header.tsx";
import MyProfile from "./MyProfile.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header/>
            <Presentation/>
            <MyProfile/>
            <Competences/>
            <Projects/>
        </div>
    )
}

export default Principal
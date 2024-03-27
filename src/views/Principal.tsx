//views
import Presentation from "./Presentation.tsx";
import Header from "../components/Header.tsx";
import MyProfile from "./MyProfile.tsx";
import MyBTS from "./MyBTS.tsx";
import Parcours from "./Parcours.tsx";
import Alternance from "./Alternance.tsx";
import Competences from "./Competences.tsx";
import Footer from "../components/Footer.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header />
            <Presentation />
            <MyProfile />
            <Parcours />
            <Alternance />
            <Competences />
            <MyBTS />
            <Footer />
        </div>
    )
}

export default Principal
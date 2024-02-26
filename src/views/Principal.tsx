//views
import Presentation from "./Presentation.tsx";
import Header from "../components/Header.tsx";
import MyProfile from "./MyProfile.tsx";
import MyBTS from "./MyBTS.tsx";
import Footer from "../components/Footer.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header />
            <Presentation />
            <MyProfile />
            <MyBTS />
            <Footer />
        </div>
    )
}

export default Principal
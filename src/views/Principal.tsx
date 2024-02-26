//views
import Presentation from "./Presentation.tsx";
import Header from "../components/Header.tsx";
import MyProfile from "./MyProfile.tsx";
import MyBTS from "./MyBTS.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header />
            <Presentation />
            <MyProfile />
            <MyBTS />
        </div>
    )
}

export default Principal
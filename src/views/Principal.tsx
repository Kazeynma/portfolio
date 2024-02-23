//views
import Presentation from "./Presentation.tsx";
import Header from "../components/Header.tsx";
import MyProfile from "./MyProfile.tsx";

const Principal = () => {
    return (
        <div id={"portfolio-container"}>
            <Header/>
            <Presentation/>
            <MyProfile/>
        </div>
    )
}

export default Principal
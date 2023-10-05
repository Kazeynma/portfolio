import WiggleIcon from "../components/WiggleIcon.tsx";
//icon
import {Brush, Music, ChefHat, Cat, Gamepad2} from "lucide-react";

const MyProfile = () => {
    return (
        <div id={"mon-profil"} className={"h-screen flex flex-col justify-center items-center gap-5"}>
            <h2 className={"title-section"}>Qui suis-je ?</h2>
            <div className={"content-container"}>
                <div id={"left-side"} className={"flex flex-col justify-center items-start gap-3 w-1/2"}>
                    <span className={"text-xl"}>Présentation</span>
                    <p>
                        Actuellement en BTS SIO SLAM. Je me passionne pour la création d'application web et mobile.
                    </p>
                    <p>
                        Objectif : Faire vivre mes idées
                    </p>

                    <span className={"text-xl"}>Intérêts</span>
                    <div className={"flex gap-5 items-start"}>
                        <WiggleIcon icon={Brush}/>
                        <WiggleIcon icon={Music}/>
                        <WiggleIcon icon={ChefHat}/>
                        <WiggleIcon icon={Cat}/>
                        <WiggleIcon icon={Gamepad2}/>
                    </div>
                </div>
                <div id={"right-side"} className={"w-1/2"}>

                </div>
            </div>
        </div>
    )
}

export default MyProfile
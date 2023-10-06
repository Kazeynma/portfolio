import {HashLink as Link} from "react-router-hash-link";
//component
import WiggleIcon from "../components/WiggleIcon.tsx";
//ui
import {Button} from "../@/components/ui/button.tsx";
//icon
import {Brush, Music, ChefHat, Cat, Gamepad2} from "lucide-react";
//img
import dev from "../assets/dev.svg"

const MyProfile = () => {

    return (
        <div id={"mon-profil"} className={"min-h-screen flex flex-col justify-center items-center gap-5"}>
            <h2 className={"title-section"}>Qui suis-je ?</h2>
            <div id="content-container" className={"flex flex-col justify-center items-center lg:w-2/3 lg:flex-row"}>
                <div id={"left-side"} className={"w-1/2"}>
                    <img src={dev}/>
                </div>
                <div id={"right-side"} className={"flex flex-col justify-center items-center lg:items-start gap-3 p-10 lg:p-0 lg:w-1/2 lg:text-lg"}>
                    <p>
                        Apprentie développeur iOS actuellement en BTS SIO SLAM.
                        Je me passionne pour la création d'application web et mobile.
                    </p>
                    <p>
                        J'ai commencé mon parcours en apprenant Python et je découvre petit à petit la vastitude de l'informatique.
                        J'ai fais une année où je faisais principalement du React avec javascript et maintenant j'apprends le développement d'application
                        mobile en Swift avec SwiftUI.
                    </p>
                    <p className={"italic text-[#6e58e0]"}>
                        Objectif : Faire vivre mes idées
                    </p>

                    <Button className={"bg-[#6e58e0] hover:bg-[#443784]"}><Link to={"/a-propos#about"}>En savoir plus →</Link></Button>

                    <span className={"text-xl"}>Intérêts</span>
                    <div className={"flex gap-5 items-start"}>
                        <WiggleIcon icon={Brush}/>
                        <WiggleIcon icon={Music}/>
                        <WiggleIcon icon={ChefHat}/>
                        <WiggleIcon icon={Cat}/>
                        <WiggleIcon icon={Gamepad2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
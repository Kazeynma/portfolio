//component
import WiggleIcon from "../components/WiggleIcon.tsx";
//ui
import { Button } from "../@/components/ui/button.tsx";
//icon
import { Brush, Music, ChefHat, Cat, Gamepad2 } from "lucide-react";
//img
import dev from "../assets/dev.svg"
import cv from "../assets/CV.pdf"

const MyProfile = () => {

    return (
        <div id={"mon-profil"} className={"min-h-screen flex flex-col justify-center items-center gap-5"}>
            <h2 className={"title-section"}>Qui suis-je ?</h2>
            <div id="content-container" className={"flex flex-col justify-center items-center lg:w-2/3 lg:flex-row"}>
                <div id={"left-side"} className={"w-1/2"}>
                    <img src={dev} />
                </div>
                <div id={"right-side"} className={"flex flex-col justify-center items-center lg:items-start gap-3 p-10 lg:p-0 lg:w-1/2 lg:text-lg"}>
                    <div>
                        <p>
                            Kagnana ITH | 21 ans
                        </p>
                        <p className={"italic text-[14px]"}>
                            Déterminée et ambitieuse
                        </p>
                    </div>
                    <p className="text-center lg:text-left">
                        Apprentie développeur iOS actuellement en BTS SIO SLAM.
                        Je me passionne pour la création d'application web et mobile.
                    </p>
                    <p className={"text-center lg:text-left italic text-[#6e58e0]"}>
                        Objectif : Faire vivre mes idées
                    </p>

                    <Button className={"bg-[#6e58e0] hover:bg-[#443784]"}><a href={cv} target='_blank'>Télécharger mon cv →</a></Button>

                    <span className={"text-xl"}>Intérêts</span>
                    <div className={"flex gap-5 items-start"}>
                        <WiggleIcon icon={Brush} />
                        <WiggleIcon icon={Music} />
                        <WiggleIcon icon={ChefHat} />
                        <WiggleIcon icon={Cat} />
                        <WiggleIcon icon={Gamepad2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
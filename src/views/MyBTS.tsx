import { HashLink as Link } from "react-router-hash-link"
// icon
import teamwork from "../assets/Team work-bro.svg"
// ui 
import { Button } from "../@/components/ui/button"


const MyBTS = () => {
    return (
        <div id={"mon-bts"} className={"min-h-screen flex flex-col justify-center items-center gap-5"}>
            <h2 className={"title-section"}>Mon but</h2>
            <div id="content-container" className={"flex flex-col justify-center items-center lg:w-2/3 lg:flex-row"}>
                <div id={"left-side"} className={"flex flex-col justify-center items-center lg:items-start gap-3 p-10 lg:p-0 lg:w-1/2 lg:text-lg"}>
                    <p className="text-center lg:text-left">
                        Mon but est de travailler à l'étranger sur plusieurs missions toujours plus difficiles.
                    </p>
                    <p className={"text-center lg:text-left italic text-[#6e58e0]"}>
                        Mon BTS est la fondation de mon parcours. Découvrez les projets et travaux fournis durant ma formation.
                    </p>

                    <Button className={"bg-[#6e58e0] hover:bg-[#443784]"}><Link to={"/BTS#bts"}>En savoir plus →</Link></Button>
                </div>
                <div id={"right-side"} className={"w-1/2"}>
                    <img src={teamwork} />
                </div>
            </div>
        </div>
    )
}

export default MyBTS
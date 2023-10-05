import {Separator} from "../@/components/ui/separator.tsx";
//icon
import {ArrowDown} from "lucide-react";

const Presentation = () => {
    return (
        <div id={"section-container"} className={"h-screen flex flex-col justify-center items-center p-10"}>
            <div className={"flex justify-center items-center gap-1"}>
                <h1 className={"animate-fade-left animate-once title-section text-4xl"}>BEYOND THE LIMIT</h1>
                <Separator orientation={"vertical"} className={"h-24 w-0.5 bg-black"}/>
                <div className={"flex flex-col animate-fade-right animate-once"}>
                    <h1 className={"title-section text-[#6E58E0] text-4xl"}>ITH Kagnana</h1>
                    <span>BTS SIO SLAM</span>
                </div>
            </div>

            <ArrowDown className={"animate-bounce animate-infinite animate-ease-linear text-[#6E58E0] w-40 mt-40"}/>
        </div>
    )
}

export default Presentation
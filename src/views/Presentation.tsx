import {Separator} from "../@/components/ui/separator.tsx";
const Presentation = () => {
    return (
        <div id={"section-container"} className={"h-screen flex justify-center items-center gap-1"}>
            <span className={"animate-fade-left animate-once text-3xl"}>BEYOND THE LIMIT</span>
            <Separator orientation={"vertical"} className={"h-24 w-0.5 bg-black"}/>
            <div className={"flex flex-col animate-fade-right animate-once"}>
                <span className={"text-3xl"}>ITH Kagnana</span>
                <span>BTS SIO SLAM</span>
            </div>
        </div>
    )
}

export default Presentation
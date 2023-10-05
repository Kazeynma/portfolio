import {LucideIcon} from "lucide-react";

type Props = {
    icon : LucideIcon
}
const WiggleIcon = (props : Props) => {
    return (
        <>
            <props.icon className={"hover:animate-bounce hover:animate-ease-linear hover:animate-infinite"} absoluteStrokeWidth/>
        </>
    )
}

export default WiggleIcon
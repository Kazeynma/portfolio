import {LucideIcon} from "lucide-react";

type Props = {
    icon : LucideIcon
}
const WiggleIcon = (props : Props) => {
    return (
        <div>
            <props.icon absoluteStrokeWidth/>
        </div>
    )
}

export default WiggleIcon
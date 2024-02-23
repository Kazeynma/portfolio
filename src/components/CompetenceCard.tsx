// icon
import { StarIcon } from "lucide-react";

enum Level {
    beginner = 0,
    intermediaite = 1,
    expert = 2

}
type Props = {
    img?: string
    title: string
    level?: Level
    showLevel?: boolean
}

const CompetenceCard = (props: Props) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col items-center">
                <img className={"h-8"} src={props.img} alt="" />
                <span>{props.title}</span>
                {props.showLevel ?
                    <div className={"flex justify-center animate-fade"}>
                        {props.level == Level.beginner && <div className={"flex text-[#ffcd3c]"}><StarIcon fill="#ffcd3c" /></div>}
                        {props.level == Level.intermediaite && <div className={"flex text-[#ffcd3c]"}><StarIcon fill="#ffcd3c" /><StarIcon fill="#ffcd3c" /></div>}
                        {props.level == Level.expert && <div className={"flex text-[#ffcd3c]"}><StarIcon fill="#ffcd3c" /><StarIcon fill="#ffcd3c" /><StarIcon fill="#ffcd3c" /></div>}
                    </div> :
                    null
                }
            </div>

        </div>
    )
}

export default CompetenceCard
import { Separator } from "../../@/components/ui/separator.tsx";

type Props = {
    titre: string
    desc: string
    content: string | JSX.Element
}
const MParcoursCardRight = (props: Props) => {
    return (
        <div className={"flex gap-2"}>
            <div></div>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"text-2xl leading-[0px] text-[#6E58E0]"}>●</div>
                <Separator orientation={"vertical"} className={"p-[1px] h-full block bg-[#6E58E0] "} />
            </div>
            <div className={"md:h-40 w-52"}>
                <h1 className={"text-xl font-bold"}>{props.titre}</h1>
                <span className={"text-gray-400"}>{props.desc}</span>
                <p className={"mt-3"}>
                    {props.content}
                </p>
            </div>

        </div>
    )
}

export default MParcoursCardRight
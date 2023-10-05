import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"

type Props = {
    title: string
    description: string
    content?: JSX.Element
    className?: string
    orientation?: string
}

const ParcoursCard = (props: Props) => {
    return (
        <div className={props.className + " flex justify-center items-center gap-1"}>
            {props.orientation === "right" ? (
                <span className={"text-xl absolute right-0 left-0 ml-auto mr-auto text-center text-[#6E58E0]"}>●</span>
            ) : null}
            <Card>
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {props.content}
                </CardContent>
            </Card>
            {props.orientation === "left" ? (
                <span className={"text-xl absolute absolute right-0 left-0 ml-auto mr-auto text-center text-[#6E58E0]"}>●</span>
            ) : null}
        </div>
    )
}

export default ParcoursCard
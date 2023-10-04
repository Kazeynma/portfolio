import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"


type Props = {
    img?: string
    title: string
    content?: JSX.Element
}

const CompetenceCard = (props: Props) => {
    return (
        <div>
            <Card className={"w-96 h-full"}>
                <CardHeader>
                    <CardTitle className={"flex flex-col items-center gap-2"}>
                        <img src={props.img} className={"h-28"}/>
                        {props.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className={"flex flex-col"}>
                    {props.content}
                </CardContent>
            </Card>
        </div>
    )
}

export default CompetenceCard
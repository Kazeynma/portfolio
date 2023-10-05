import {
    Card, CardContent,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"


type Props = {
    img?: string
    title: string
    content?: string
}

const CompetenceCard = (props: Props) => {
    return (
        <div className={"relative"}>
            <Card className={"w-40 h-32"}>
                <CardHeader>
                    <CardTitle className={"flex flex-col items-center gap-2"}>
                        <img src={props.img} className={"h-8"}/>
                        {props.title}
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className={"w-40 h-32 absolute opacity-0 top-0 bottom-0 right-0 left-0 hover:opacity-100 hover:animate-fade hover:animate-ease-in-outr"}>
                <CardContent className={"flex justify-center items-center px-1 py-0 h-full text-center"}>
                    {props.content}
                </CardContent>
            </Card>
        </div>
    )
}

export default CompetenceCard
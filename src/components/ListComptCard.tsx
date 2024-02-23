import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "../@/components/ui/card"

type Props = {
    title?: string
    content?: JSX.Element
}

const ListComptCard = (props: Props) => {
    return (
        <div>
            <Card className={"w-32 lg:w-52 xl:w-80 h-full"}>
                <CardHeader>
                    <CardTitle className={"flex flex-col items-center gap-2"}>
                        {props.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {props.content}
                </CardContent>
            </Card>
        </div>
    )
}

export default ListComptCard
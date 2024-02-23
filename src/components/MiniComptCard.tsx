import {
    Card,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"

type Props = {
    img?: string
    content?: string
}

const MiniComptCard = (props: Props) => {
    return (
        <div>
            <Card className={"w-2/12"}>
                <CardHeader>
                    <CardTitle className={"flex flex-col items-center gap-2"}>
                        <img src={props.img}/>
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default MiniComptCard
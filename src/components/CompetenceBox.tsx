import { Card, CardContent, CardHeader, CardTitle } from "../@/components/ui/card"

type Props = {
    title: string
    content?: JSX.Element
    showLevel: boolean
    setShowLevel: React.Dispatch<React.SetStateAction<boolean>>
}

const CompetenceBox = (props: Props) => {
    const hover = () => {
        props.setShowLevel(true)
        console.log("yay")
    }

    const noHover = () => (
        props.setShowLevel(false)
    )
    return (
        <Card onMouseOver={hover} onMouseOut={noHover} className="w-2/3">
            <CardHeader>
                <CardTitle className="w-full">{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center flew-wrap justify-around w-full">
                {props.content}
            </CardContent>
        </Card>
    )
}

export default CompetenceBox
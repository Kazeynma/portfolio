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
        <Card onMouseOver={hover} onMouseOut={noHover} className="w-1/2">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {props.content}
            </CardContent>
        </Card>
    )
}

export default CompetenceBox
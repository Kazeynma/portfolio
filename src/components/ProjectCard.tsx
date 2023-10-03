import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"

type Props = {
    title: string
    description: string
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    link1?: string
    link2?: string
    pdf?: string
    titleLink1?: string
    titleLink2?: string
}

export const ProjectCard = (props: Props) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div id={"image-carroussel"} className={"flex justify-center items-center gap-5"}>
                        <img src={props.img1} className={"w-1/2"}/>
                        <img src={props.img2} className={"w-1/2"}/>
                        <img src={props.img3} className={"w-1/2"}/>
                        <img src={props.img4} className={"w-1/2"}/>
                    </div>
                </CardContent>
                <CardFooter className={"flex flex-col justify-center items-start"}>
                    <span className={"text-green-700"}>Liens vers les répertoires Github : </span>
                    <a href={props.link1} target={"_blank"}>{props.titleLink1}</a>
                    <a href={props.link2} target={"_blank"}>{props.titleLink2}</a>

                    <span className={"text-green-700 mt-3"}>Rapport du projet : </span>
                    <a href={props.pdf} target={"_blank"}>PDF rapport de projet</a>
                </CardFooter>
            </Card>
        </>
    )
}
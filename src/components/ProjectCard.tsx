import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../@/components/ui/card"
//icon
import {ExternalLink, Eye} from "lucide-react";

interface Link {
    ref: string
    title: string
}

type Props = {
    title: string
    description: string
    imgs?: string[]
    links?: Link[]
    pdf?: string
    titleLink1?: string
    titleLink2?: string
    scrollAnimation?: boolean
}

export const ProjectCard = (props: Props) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardHeader>
                <CardContent className={"flex justify-center items-center flex-col"}>
                    <div id={"image-carroussel"} className={"flex relative mx-auto gap-5 snap-x snap-mandatory overflow-x-auto bg-white w-full"}>
                        {props.imgs && props.imgs.map((img) => (
                            <div className={"snap-center shrink-0"}>
                                <img src={img} className={"border rounded border-muted-foreground h-52 lg:h-80"}/>
                            </div>
                        ))}
                    </div>
                    {props.scrollAnimation ? (
                        <div className={"animate-fade-left animate-infinite animate-ease-linear text-[#6E58E0] text-5xl text-center"}>○</div>
                    ) : null}
                </CardContent>
                <CardFooter className={"flex flex-col justify-center items-start"}>
                    <span className={"text-[#6E58E0]"}>Liens vers les répertoires Github : </span>
                    {props.links && props.links.map((link) => (
                        <a href={link.ref} target={"_blank"} className={"flex items-center gap-2"}>{link.title} <ExternalLink className={"w-4"}/></a>
                    ))}

                    <span className={"text-[#6E58E0] mt-3"}>Rapport du projet : </span>
                    <a href={props.pdf} target={"_blank"} className={"flex items-center gap-2"}>Visualiser le rapport de projet <Eye/></a>
                </CardFooter>
            </Card>
        </>
    )
}
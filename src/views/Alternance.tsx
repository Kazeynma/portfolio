import { Laptop, TabletSmartphone } from "lucide-react"

const Alternance = () => {
    return (
        <div id={"alternance"} className={"min-h-screen flex flex-col justify-center items-center relative gap-5 p-5"}>
            <h2 className={"title-section"}>Alternance</h2>
            <div className={"flex flex-col items-left p-5 border rounded w-2/3 gap-3"}>
                <div className="flex flex-row ">
                    <Laptop className="mr-5" />
                    <div className="flex flex-col">
                        <span>ISITECH - PARTNER FORMATION</span>
                        <span>2022 - 2023</span>
                    </div>
                </div>
                <div>
                    <p>ISITECH est une école d'informatique en alternance qui propose plusieurs cursus différents. Elle y développe sa propre GRC.</p>
                </div>
                <div>
                    <span className="italic ">React - ExpressJS - MongoDB - Wordpress -  VSCode - Git - Github - Postman</span>
                </div>
            </div>
            <div className={"flex flex-col items-left p-5 border rounded w-2/3 gap-3"}>
                <div className="flex flex-row ">
                    <TabletSmartphone className="mr-5" />
                    <div className="flex flex-col">
                        <span>WIMOVA</span>
                        <span>2023 - 2024</span>
                    </div>
                </div>
                <div>
                    <p>Wimova est une entreprise de mobilité B2B. </p>
                    <p>Elle y développe sa propre application, Mewi Driver. L'application est disponible sur iOS et Android et permet aux taxis de réaliser des courses.</p>
                    <p>Je suis accompagnée par Olivier Robin, lead dev iOS.</p>
                </div>
                <div>
                    <span className="italic ">Swift - SwiftUI - XCode - Agile - Git - Azure DevOps</span>
                </div>
            </div>
        </div>
    )
}

export default Alternance
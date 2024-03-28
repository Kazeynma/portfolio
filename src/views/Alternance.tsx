import { Laptop, TabletSmartphone } from "lucide-react"
import wimovaLogo from "../assets/wimova.png"
import isitechLogo from "../assets/isitech.png"

const Alternance = () => {
    return (
        <div id={"alternance"} className={"min-h-screen flex flex-col justify-center items-center relative gap-5 p-5"}>
            <h2 className={"title-section"}>Alternance</h2>
            <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-1">
                <div className={"flex flex-col items-left p-5 border rounded w-2/3 gap-3"}>
                    <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
                        <div className="flex flex-row ">
                            <Laptop className="mr-5" />
                            <div className="flex flex-col">
                                <span className="font-bold">ISITECH - PARTNER FORMATION</span>
                                <span className="text-[#6E58E0]">2022 - 2023</span>
                            </div>
                        </div>
                        <img className="w-1/2 self-center lg:w-1/4" src={isitechLogo} alt="Isitech Logo" />
                    </div>
                    <div>
                        <p>ISITECH est une école d'informatique en alternance qui propose plusieurs cursus différents en informatique. Elle y développe sa propre GRC.</p>
                    </div>
                    <div>
                        <p>Mes missions en tant que développeuse fullstack était de créer une interface web permettant aux utilisateurs de retrouver toutes les informations nécessaire sur un dashboard.</p>
                        <p>J'ai également fait de la résolution de bogues.</p>
                    </div>
                    <div className="mt-auto">
                        <span className="italic ">React - ExpressJS - MongoDB - Wordpress -  VSCode - Git - Github - Postman</span>
                    </div>
                </div>
                <div className={"flex flex-col items-left p-5 border rounded w-2/3 gap-3"}>
                    <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
                        <div className="flex flex-row ">
                            <TabletSmartphone className="mr-5" />
                            <div className="flex flex-col">
                                <span className="font-bold">WIMOVA</span>
                                <span className="text-[#6E58E0]">2023 - 2024</span>
                            </div>
                        </div>
                        <img className="w-1/2 self-center lg:w-1/4" src={wimovaLogo} alt="Wimova Logo" />
                    </div>
                    <div>
                        <p>Wimova est une entreprise de mobilité B2B. </p>
                        <p>En plus de son centre d'appel, elle y développe sa propre application, Mewi Driver. L'application est disponible sur iOS et Android et permet aux taxis de réaliser des courses.</p>
                        <p>Je suis accompagnée par Olivier Robin, lead dev iOS.</p>
                    </div>
                    <div>
                        <p>Je travaille pour Wimova en tant que développeuse iOS au sein d'une équipe de 16 personnes sur diverses stacks.</p>
                        <p>Mes principales missions sont la création d'interface mobile et la résolution de bogues</p>
                    </div>
                    <div className="mt-auto">
                        <span className="italic ">Swift - SwiftUI - XCode - Méthode Agile - Git - Azure DevOps</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alternance
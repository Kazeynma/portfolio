//ui
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../@/components/ui/tabs.tsx"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../@/components/ui/accordion"

//component
import { ProjectCard } from "../components/ProjectCard.tsx";
//img
import ap1Screen1 from "../assets/ap1/screen1.jpeg"
import ap1Screen2 from "../assets/ap1/screen2.jpeg"
import ap1Screen3 from "../assets/ap1/screen3.jpeg"
import ap1Screen4 from "../assets/ap1/screen4.jpeg"
import ap2Screen1 from "../assets/ap2/screen1.png"
import ap2Screen2 from "../assets/ap2/screen2.png"
import ap2Screen3 from "../assets/ap2/screen3.png"
import ap2Screen4 from "../assets/ap2/screen4.png"
import ap3Screen1 from "../assets/ap3/ap3_menu.png"
import ap3Screen2 from "../assets/ap3/ap3_ajout_ordonnance.png"
import ap3Screen3 from "../assets/ap3/ap3_list_patient.png"
import ap3Screen4 from "../assets/ap3/ap3_consultation_ordo.png"
import ap4Screen1 from "../assets/ap4/screen_login_page.png"
import ap4Screen2 from "../assets/ap4/screen_home.png"
import ap4Screen3 from "../assets/ap4/screen_order_list.png"
import ap4Screen4 from "../assets/ap4/screen_order_detail.png"

// img icon
import { icons } from "../data/iconsImports.ts";
//pdf
import ap1Rapport from "../assets/ap1/AP1 - Plenty.pdf"
import ap2Rapport from "../assets/ap2/AP-2.pdf"
import ap3Rapport from "../assets/ap3/AP3 - eMEDS.pdf"
import ap4Rapport from "../assets/ap4/AP4 - GSBStock.pdf"

const Projects = () => {
    return (
        <div id={"projet"} className={"min-h-screen flex justify-center items-center flex-col gap-5 mt-24"}>
            <h2 className={"title-section"}>Mes projets de BTS</h2>
            <Tabs defaultValue={"ap1"} className={"w-4/5 hidden lg:block "}>
                <TabsList className={"bg-[#B5AAEF]"}>
                    <TabsTrigger value={"ap1"}>AP1 - Plenty</TabsTrigger>
                    <TabsTrigger value={"ap2"}>AP2 - Taskies</TabsTrigger>
                    <TabsTrigger value={"ap3"}>AP3 - eMeds</TabsTrigger>
                    <TabsTrigger value={"ap4"}>AP4 - GSBStocks</TabsTrigger>
                </TabsList>
                <TabsContent value={"ap1"}>
                    <ProjectCard
                        title={"AP1 - Plenty"}
                        description={"Application mobile React Native - en duo avec Marine Richer"}
                        links={[
                            { ref: "https://github.com/MarineRcher/plenty", title: "Application mobile" },
                            { ref: "https://github.com/MarineRcher/Plenty-API", title: "API" }
                        ]}
                        imgs={[ap1Screen1, ap1Screen2, ap1Screen4, ap1Screen3]}
                        pdf={ap1Rapport}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.react} alt={"react-icon"} />
                                <img className={"h-10"} src={icons.javascript} alt={"js-icon"} />
                                <img className={"h-10"} src={icons.mongoDB} alt={"mongoDB-icon"} />
                            </div>
                        }
                    />
                </TabsContent>
                <TabsContent value={"ap2"}>
                    <ProjectCard
                        title={"AP2 - Taskies"}
                        description={"Application web React Typescript"}
                        links={[
                            { ref: "https://github.com/Kazeynma/AP2-Taskies", title: "Application web" },
                            { ref: "https://github.com/Kazeynma/AP2-Taskies-API", title: "API" }
                        ]}
                        imgs={[ap2Screen1, ap2Screen2, ap2Screen3, ap2Screen4]}
                        pdf={ap2Rapport}
                        scrollAnimation={true}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.react} alt={"react-icon"} />
                                <img className={"h-10"} src={icons.typescript} alt={"ts-icon"} />
                                <img className={"h-10"} src={icons.mongoDB} alt={"mongoDB-icon"} />
                            </div>
                        }
                    />
                </TabsContent>
                <TabsContent value={"ap3"}>
                    <ProjectCard
                        title={"AP3 - eMeds"}
                        description={"Application client lourd C# avec WinForms MySQL"}
                        links={[
                            { ref: "https://github.com/iKagnana/AP3-eMEDS", title: "Github du projet" },
                        ]}
                        imgs={[ap3Screen1, ap3Screen2, ap3Screen3, ap3Screen4]}
                        pdf={ap3Rapport}
                        scrollAnimation={true}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.winForms} alt={"react-icon"} />
                                <img className={"h-10"} src={icons.cSharp} alt={"ts-icon"} />
                                <img className={"h-10"} src={icons.mySQL} alt={"mongoDB-icon"} />
                            </div>
                        }

                    />

                </TabsContent>
                <TabsContent value={"ap4"}>
                    <ProjectCard
                        title={"AP4 - GSBStock"}
                        description={"Application web PHP vanilla, clean archi MVC"}
                        links={[
                            { ref: "https://github.com/iKagnana/ap4-GSBStock", title: "https://github.com/iKagnana/ap4-GSBStock" },
                        ]}
                        imgs={[ap4Screen1, ap4Screen2, ap4Screen3, ap4Screen4]}
                        pdf={ap4Rapport}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.php} alt={"php-icon"} />
                                <img className={"h-10"} src={icons.html} alt={"html-icon"} />
                                <img className={"h-10"} src={icons.css} alt={"css-icon"} />
                            </div>
                        }
                    />
                </TabsContent>
            </Tabs>
            <Accordion type="single" collapsible className={"w-full p-5 lg:hidden"}>
                <AccordionItem value="ap1">
                    <AccordionTrigger>AP1 - Plenty</AccordionTrigger>
                    <AccordionContent>
                        <ProjectCard
                            title={"AP1 - Plenty"}
                            description={"Application mobile React Native - en duo avec Marine Richer"}
                            links={[
                                { ref: "https://github.com/MarineRcher/plenty", title: "Application mobile" },
                                { ref: "https://github.com/MarineRcher/Plenty-API", title: "API" }
                            ]}
                            imgs={[ap1Screen1, ap1Screen2, ap1Screen4, ap1Screen3]}
                            pdf={ap1Rapport}
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ap2">
                    <AccordionTrigger>AP2 - Taskies</AccordionTrigger>
                    <AccordionContent>
                        <ProjectCard
                            title={"AP2 - Taskies"}
                            description={"Application web React Typescript"}
                            links={[
                                { ref: "https://github.com/Kazeynma/AP2-Taskies", title: "Application web" },
                                { ref: "https://github.com/Kazeynma/AP2-Taskies-API", title: "API" }
                            ]}
                            imgs={[ap2Screen1, ap2Screen2, ap2Screen3, ap2Screen4]}
                            pdf={ap2Rapport}
                            scrollAnimation={true}
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ap3">
                    <AccordionTrigger>AP3 - eMeds</AccordionTrigger>
                    <AccordionContent>
                        <ProjectCard
                            title={"AP3 - eMeds"}
                            description={"Application client lourd C# avec WinForms MySQL"}
                            links={[
                                { ref: "https://github.com/iKagnana/AP3-eMEDS", title: "https://github.com/iKagnana/AP3-eMEDS" },
                            ]}
                            imgs={[ap3Screen1, ap3Screen2, ap3Screen3, ap3Screen4]}
                            pdf={ap3Rapport}
                            scrollAnimation={true}
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ap4">
                    <AccordionTrigger>AP4 - GSBStocks</AccordionTrigger>
                    <AccordionContent>
                        <ProjectCard
                            title={"AP4 - ?"} description={""}
                            links={[
                                { ref: "https://github.com/iKagnana/ap4-GSBStock", title: "https://github.com/iKagnana/ap4-GSBStock" },
                            ]}
                            imgs={[ap4Screen1, ap4Screen2, ap4Screen3, ap4Screen4]}
                            pdf={ap4Rapport}
                            scrollAnimation={true}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Projects
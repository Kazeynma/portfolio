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
import {ProjectCard} from "../components/ProjectCard.tsx";
//img
import ap1Screen1 from "../assets/ap1/screen1.jpeg"
import ap1Screen2 from "../assets/ap1/screen2.jpeg"
import ap1Screen3 from "../assets/ap1/screen3.jpeg"
import ap1Screen4 from "../assets/ap1/screen4.jpeg"
import ap2Screen1 from "../assets/ap2/screen1.png"
import ap2Screen2 from "../assets/ap2/screen2.png"
import ap2Screen3 from "../assets/ap2/screen3.png"
import ap2Screen4 from "../assets/ap2/screen4.png"
// img icon
import {icons} from "../data/iconsImports.ts";
//pdf
import ap2Rapport from "../assets/ap2/AP-2.pdf"

const Projects = () => {
    return (
        <div id={"projet"} className={"min-h-screen flex justify-center items-center flex-col gap-5 mt-24"}>
            <h2  className={"title-section"}>Mes projets de BTS</h2>
            <Tabs defaultValue={"ap1"} className={"w-4/5 hidden lg:block "}>
                <TabsList className={"bg-[#B5AAEF]"}>
                    <TabsTrigger value={"ap1"}>AP1 - Plenty</TabsTrigger>
                    <TabsTrigger value={"ap2"}>AP2 - Taskies</TabsTrigger>
                    <TabsTrigger value={"ap3"}>AP3 - eMeds</TabsTrigger>
                    <TabsTrigger value={"ap4"}>AP4 - ?</TabsTrigger>
                </TabsList>
                <TabsContent value={"ap1"}>
                    <ProjectCard
                        title={"AP1 - Plenty"}
                        description={"Application mobile React Native - en duo avec Marine Richer"}
                        links={[
                            {ref: "https://github.com/MarineRcher/plenty", title: "Application mobile"},
                            {ref: "https://github.com/MarineRcher/Plenty-API", title: "API"}
                        ]}
                        imgs={[ap1Screen1, ap1Screen2, ap1Screen4, ap1Screen3]}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.react} alt={"react-icon"}/>
                                <img className={"h-10"} src={icons.javascript} alt={"js-icon"}/>
                                <img className={"h-10"} src={icons.mongoDB} alt={"mongoDB-icon"}/>
                            </div>
                        }
                    />
                </TabsContent>
                <TabsContent value={"ap2"}>
                    <ProjectCard
                        title={"AP2 - Taskies"}
                        description={"Application web React Typescript"}
                        links={[
                            {ref: "https://github.com/Kazeynma/AP2-Taskies", title: "Application web"},
                            {ref: "https://github.com/Kazeynma/AP2-Taskies-API", title: "API"}
                        ]}
                        imgs={[ap2Screen1, ap2Screen2, ap2Screen3, ap2Screen4]}
                        pdf={ap2Rapport}
                        scrollAnimation={true}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.react} alt={"react-icon"}/>
                                <img className={"h-10"} src={icons.typescript} alt={"ts-icon"}/>
                                <img className={"h-10"} src={icons.mongoDB} alt={"mongoDB-icon"}/>
                            </div>
                        }
                    />
                </TabsContent>
                <TabsContent value={"ap3"}>
                    <ProjectCard
                        title={"AP3 - eMeds"}
                        description={"Application client lourd C# avec WinForms MySQL"}
                        links={[
                            {ref: "https://github.com/Kazeynma/AP3-eMEDS", title: "https://github.com/Kazeynma/AP3-eMEDS"},
                        ]}
                        competences={
                            <div className={"flex w-full gap-1"}>
                                <img className={"h-10"} src={icons.winForms} alt={"react-icon"}/>
                                <img className={"h-10"} src={icons.cSharp} alt={"ts-icon"}/>
                                <img className={"h-10"} src={icons.mySQL} alt={"mongoDB-icon"}/>
                            </div>
                        }

                    />

                </TabsContent>
                <TabsContent value={"ap4"}>
                    <ProjectCard title={"AP4 - ?"} description={"Pas encore commencé"}/>
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
                                {ref: "https://github.com/MarineRcher/plenty", title: "Application mobile"},
                                {ref: "https://github.com/MarineRcher/Plenty-API", title: "API"}
                            ]}
                            imgs={[ap1Screen1, ap1Screen2, ap1Screen4, ap1Screen3]}
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
                                {ref: "https://github.com/Kazeynma/AP2-Taskies", title: "Application web"},
                                {ref: "https://github.com/Kazeynma/AP2-Taskies-API", title: "API"}
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
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ap4">
                    <AccordionTrigger>AP4 - ?</AccordionTrigger>
                    <AccordionContent>
                        <ProjectCard title={"AP4 - ?"} description={""}/>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Projects
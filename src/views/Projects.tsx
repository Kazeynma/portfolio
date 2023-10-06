//ui
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../@/components/ui/tabs.tsx"
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
//pdf
import ap2Rapport from "../assets/ap2/AP-2.pdf"

const Projects = () => {
    return (
        <div id={"projet"} className={"h-screen flex justify-center items-center flex-col gap-5 mt-24"}>
            <h2  className={"title-section"}>Mes projets de BTS</h2>
            <Tabs defaultValue={"ap1"} className={"w-4/5"}>
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
                    />
                </TabsContent>
                <TabsContent value={"ap3"}>
                    <ProjectCard
                        title={"AP3 - eMeds"}
                        description={"Application client lourd Java/Java Swing (en cours)"}
                    />

                </TabsContent>
                <TabsContent value={"ap4"}>
                    <ProjectCard title={"AP4 - ?"} description={""}/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Projects
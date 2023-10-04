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
import ap2Screen1 from "../assets/ap2/screen1.png"
//pdf
import ap2Rapport from "../assets/ap2/AP-2.pdf"

const Projects = () => {
    return (
        <div id={"projet"} className={"h-screen flex justify-center items-center"}>
            <Tabs defaultValue={"ap1"} className={"w-2/3"}>
                <TabsList>
                    <TabsTrigger value={"ap1"}>AP1 - Plenty</TabsTrigger>
                    <TabsTrigger value={"ap2"}>AP2 - Taskies</TabsTrigger>
                    <TabsTrigger value={"ap3"}>AP3 - eMeds</TabsTrigger>
                    <TabsTrigger value={"ap4"}>AP4 - ?</TabsTrigger>
                </TabsList>
                <TabsContent value={"ap1"}>
                    <ProjectCard
                        title={"AP1 - Plenty"}
                        description={"Application mobile React Navtive - en duo avec Marine Richer"}
                        link1={"https://github.com/MarineRcher/plenty"}
                        titleLink1={"Application mobile"}
                        link2={"https://github.com/MarineRcher/Plenty-API"}
                        titleLink2={"API"}
                    />
                </TabsContent>
                <TabsContent value={"ap2"}>
                    <ProjectCard
                        title={"AP2 - Taskies"}
                        description={"Application web React Typescript"}
                        link1={"https://github.com/Kazeynma/AP2-Taskies"}
                        titleLink1={"Application web"}
                        link2={"https://github.com/Kazeynma/AP2-Taskies-API"}
                        titleLink2={"API"}
                        img1={ap2Screen1}
                        pdf={ap2Rapport}
                    />
                </TabsContent>
                <TabsContent value={"ap3"}>
                    <ProjectCard
                        title={"AP3 - eMeds"}
                        description={"Application client lourd Java/Java Swing"}
                    />

                </TabsContent>
                <TabsContent value={"ap4"}>

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Projects
import tableauCompetence from "../assets/tableau-competence.pdf"
import { Eye } from "lucide-react"

const TableauCompt = () => {
    return (
        <div id={"tableau-competence"} className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10 relative"}>
            <h2 className={"title-section"}>Tableau de compétences</h2>
            <a href={tableauCompetence} target={"_blank"} className={"flex items-center gap-2"}>Voir le tableau de compétence <Eye /></a>
        </div>
    )
}

export default TableauCompt
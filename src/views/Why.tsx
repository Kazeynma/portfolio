const Why = () => {
    return (
        <div id={"pourquoi-informatique"} className={"h-screen flex justify-center items-center flex-col gap-5"}>
            <span className={"text-3xl"}>Pourquoi l'informatique ?</span>
            <div className={"flex justify-center items-center w-2/3 gap-5"}>
                <div id={"left-side"}>
                    <img src={"https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg"} className={"w-96"}/>
                </div>
                <div id={"right-side"} className={"flex flex-col gap-3 w-1/2"}>
                    <p>
                        J'ai toujours aimé apprendre de nouvelles choses, et cela inclut l'informatique. J'ai découvert la programmation Python en seconde grâce à une option proposée par mon école.
                        C'est ce qui m'a poussé en première à prendre l'option NSI, j'ai également appris HTML et CSS, et j'ai pris beaucoup de plaisir à créer mon propre site web.
                    </p>
                    <p>
                        Cependant, malgré de bonnes notes, j'avais des doutes quant à ma capacité à devenir ingénieure informatique.
                        Le COVID et le confinement ont eu un impact sur mes projets d'avenir.
                        J'ai donc décidé de suivre une année d'études en LEA anglais - coréen, mais j'ai rapidement réalisé que l'université n'était pas fait pour moi.
                    </p>
                    <p>
                        L'informatique me manquait terriblement, et j'ai été motivée à y revenir après avoir été inspirée par des personnes de mon entourage qui travaillaient dans ce domaine.
                        Aujourd'hui, je suis convaincue que je veux faire de l'informatique mon métier.
                    </p>
                    <p className={"text-[16px] italic"}>
                        TLDR : J'ai fais de l'informatique auparavant mais je n'étais pas sûre d'y arriver. J'ai fais une année de licence LEA,
                        l'informatique me manquait, donc j'ai décidé de me réorienter.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Why
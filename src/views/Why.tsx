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
                        J'ai toujours aimé apprendre de nouvelles choses et l'informatique n'en faisait pas une exception.
                        Dès la seconde j'ai pu avoir l'opportunité de découvrir l'informatique avec le langage de programmation Python
                        grâce à l'option ICN proposé par l'école.
                    </p>
                    <p>
                        L'informatique m'a plu, alors j'ai choisi l'option NSI en première.
                        On a principalement fait du Python. Et j'ai également découvert l'HTML et le CSS. J'ai pris beaucoup de
                        plaisir à créer mon propre site.
                    </p>
                    <p>
                        Malgré le fait que devenir ingénieure informatique m'ai traversé l'esprit, je n'étais pas sûre d'être à la hauteur (malgré mes bonnes notes).
                        Le COVID et le confinement on eu beaucoup d'impact sur mes projets d'avenir à ce moment là.
                        J'ai donc fait une année de LEA anglais - coréen qui m'a permis d'apprendre beaucoup de chose.
                        Cependant je me suis rendue compte que l'université n'était pas fait pour moi.
                    </p>
                    <p>
                        L'informatique me manquait. J'étais entourée de personne ayant fait de l'informatique et les entendre parler de leur projet m'avait motivé à retourner
                        vers l'informatique.
                    </p>
                    <p>
                        Maintenant je suis convaincue de faire de l'informatique mon métier.
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
const VeilleTechno = () => {
    return (
        <div className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10 relative"}>
            <h2 id={"veille-technologique"} className={"title-section"}>Veille technologique</h2>
            <span>Les langages et outils utilisés dans le développement web.</span>
            <div className={""}>
                <iframe loading="lazy"
                        allowFullScreen={true}
                        className={"w-full h-2/3 absolute right-0 left-0 top-2/3 bottom-0 p-0 m-0"}
                        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFzefwqylg&#x2F;view?embed" allow="fullscreen">
                </iframe>
            </div>
        </div>
    )
}

export default VeilleTechno

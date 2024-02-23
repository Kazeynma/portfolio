const CuriculumVitae = () => {
    return (
        <div className={"min-h-screen flex justify-center items-center flex-col gap-5 p-10 relative"}>
            <h2 id={"curiculum-vitae"} className={"title-section"}>Curiculum Vitae</h2>
            <span>Mon CV</span>
            <div className={""}>
                <iframe loading="lazy"
                    className={"w-full h-full absolute right-0 left-0 top-2/3 bottom-0 p-0 m-0"}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF2wWwSq_Y&#x2F;view?embed">
                </iframe>
            </div>
        </div>
    )
}

export default CuriculumVitae
import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Project from "./Project/Project";



const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`} >
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Project 1"} description={"Lorem ipsum may be used as a placeholder before final copy is available."}/>
                    <Project title={"Project 2"} description={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
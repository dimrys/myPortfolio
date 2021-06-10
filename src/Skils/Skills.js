import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}/>
                    <Skill title={"CSS"} description={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."}/>
                    <Skill title={"React"} description={"Lorem ipsum may be used as a placeholder before final copy is available."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
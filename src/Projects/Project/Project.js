import style from "./Project.module.css"



const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <div className={style.transition}>Смотреть</div>
            </div>
            <div className={style.descriptionContainer}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description} </span>
            </div>

        </div>
    );
}

export default Project;
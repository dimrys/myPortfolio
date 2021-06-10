import style from "./Main.module.css"
import styleContainer from "./../common/styles/Container.module.css"


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1> I am Jeffrey Aaron</h1>
                    <p> A UI/UX Designer.,Graphic Designer.,UI Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
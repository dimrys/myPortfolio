import style from "./Footer.module.css"
import styleContainer from "./../common/styles/Container.module.css"



const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`} >
                <h2>Dmitry Rysnik</h2>
                <div className={style.footerContacts}></div>
                <div > © 2021 All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default Footer;
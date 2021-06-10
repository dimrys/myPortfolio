import style from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">ABOUT</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACTS</a>
        </div>
    );
}

export default Nav;
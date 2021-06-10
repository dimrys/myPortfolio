import style from "./Contact.module.css"
import styleContainer from "./../common/styles/Container.module.css"



const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`} >
                <h2 className={style.title}>Contacts</h2>
                <form className={style.formWrapper}>
                    <div className={style.data}>

                        <input type="text" placeholder={"Name"}/>

                        <input type="text" placeholder={"Email"}/>

                        <textarea placeholder={'Write your message here...'}
                                  cols="30"
                                  rows="5"
                        />
                    </div>


                    <button type={"submit"}><span>Send</span></button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
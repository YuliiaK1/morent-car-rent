import style from "./Button.module.css"

export default function Button({text}){
    return (
            <button className={style.mainButton}>
                {text}
            </button>
    )
}
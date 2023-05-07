import style from "./Container.module.css"
import { useContext } from "react"
import Context from "./Context"

export default function Container(props){
    const value = useContext(Context);
    const sideContainer = value.isOpen && style.sideOpen
    return (
       <div className={`${style.container} ${sideContainer}`}>
            <div className={style.mainContent}>
                {props.children}
            </div>
       </div>
    )
}
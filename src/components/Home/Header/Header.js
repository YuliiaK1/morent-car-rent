import logo from "../../../assets/header-logo-car.svg";
import style from "./Header.module.css"

export default function Header({headline}){
    return (
        <div className={style.header}>
            <img src={logo} alt="Car rental website logo"/>
            <h1>{headline}</h1>
        </div>
    )
}
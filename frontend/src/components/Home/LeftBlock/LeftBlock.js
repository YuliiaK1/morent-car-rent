import { Link } from "react-router-dom"
import style from "./LeftBlock.module.css"
import Header from "../Header/Header";
import Description from "../Description/Description";
import MainPage from "../../Main/MainPage";
import Button from "../Button/Button";
import Options from "../Options/Options";

export default function LeftBlock({width}){
	return (
        <div className={style.leftBlock} style={{width: width}}>
            <Header headline="Morent"/>
            <Description/>
            <div>
            <Link to="/main" element={<MainPage/>}><Button btn="btnStart" text="Sign in"/></Link>
            </div>
            <Options/>
        </div>
    )
}


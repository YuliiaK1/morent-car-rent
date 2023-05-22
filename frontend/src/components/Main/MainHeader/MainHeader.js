import { Link } from "react-router-dom"
import style from "./MainHeader.module.css"
import Title from "./Title"
import SearchPanel from "./SearchPanel"
import UserPanel from "./UserPanel"

export default function MainHeader(){
    return (
        <header>
            <div className={style.headerLeft}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Title/>
                </Link>
                <SearchPanel/>
            </div>
            <UserPanel/>
        </header>
    )
}



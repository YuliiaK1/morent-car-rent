import { useSelector } from "react-redux"
import Card from "./Cards/Card"
import style from "./Favorites.module.css"
import arrow from "../../assets/arrow-left.svg"
import emptyBox from "../../assets/empty-box.png"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';


export default function Favorites(){
    const favoritesList = useSelector(state=> state.favorites.favoritesList);
    return (
        <div className={style.favoritesBlock}>
            <div className={style.backLink}>
                <Link to="/main" style={{textDecoration: 'none'}}>
                    <img src={arrow} alt="Back to all cars" />
                    Back
                </Link>
            </div>
            {!favoritesList.length? 
                <div className={style.favEmpty}>
                    <img src={emptyBox} alt="Empty Box" />
                </div> :  
                <div className={style.favorites}>
                    {favoritesList.map((card)=>(<Card key={uuidv4()} card={card}/>))}
                </div>
            }
        </div>
    )
}


import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../store/favoritesSlice"
import { addToReserve } from "../../../store/reserveSlice"
import style from './Card.module.css';
import {liked, unliked, roominess, gas, gear} from "../../../assets/DataStorage/Images"
import { Link } from "react-router-dom"

function Card({card}) {
const favoritesList = useSelector(state=> state.favorites.favoritesList);
const dispatch = useDispatch();
const { name, image, price } = card;

  return (
        <div className={style.cardBlock}>
            <div className={style.title}>
                <h1>{card.name}</h1>
                <img style={{cursor: "pointer"}} src={favoritesList.includes(card)? unliked : liked} alt="Add to favorite" 
                onClick={() => {
                    if (favoritesList.find((favObj) => favObj === card)) {
                      dispatch(removeFromFavorites(card));
                    } else {
                      dispatch(addToFavorites(card));
                    }
                  }}
                />
            </div>
            <p className={style.type}>{card.type}</p>
            <div className={style.content}>
                <div className={style.image}>
                    <img src={card.image} alt={card.name} />
                </div>
                <div className={style.featureBlock}>
                    <div className={style.feature}>
                        <img src={gas} alt="Gas station value"/>
                        <p>{card.gas}</p>
                    </div>
                    <div className={style.feature}>
                        <img src={gear} alt="Gear of a car" />
                        <p>{card.gearbox}</p>
                    </div>
                    <div className={style.feature}>
                        <img src={roominess} alt="Number of passengers" />
                        <p>{card.roominess} Seat</p>
                    </div>
                </div>
            </div>
            <div className={style.price}>
                <div className={style.total}>
                    <p>&#36;{card.price}/</p>
                    <span>day</span>
                </div>
                <Link to="/main/reserve" style={{textDecoration: 'none', width: '113px', height: '40px'}}>
                    <button onClick={()=>dispatch(addToReserve({name, image, price}))}>Rent Now</button>
                </Link>
            </div>
        </div>
  );
}

export default Card;
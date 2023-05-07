import style from './Card.module.css';

export default function CardsSection (props) {
    return (
    <div className={style.cardsBlock}>
        {props.children}
    </div>
    )
}
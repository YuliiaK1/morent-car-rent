import style from './Options.module.css';

export default function Options(){
	return (
    <div className={style.optionsBlock}>
      <ul>
        <li>Full Guarantee</li>
        <li>Safe Deal</li>
        <li>Fast payment</li>
        <li>Large selection </li>
        <li>Support services 24/7</li>
        <li>Order replacement/cancellation</li>
      </ul>
    </div>
    )
}
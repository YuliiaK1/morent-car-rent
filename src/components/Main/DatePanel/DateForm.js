import style from "./DateForm.module.css"
import LocationSelect from "./LocationSelect";
import DateSelect from "./DateSelect";
import TimePanel from "./TimePanel";

export default function DateForm({id, selected, handleChange, title, disabled, form, setForm, reserveOpen}){
    return (
        <div className={!reserveOpen? style.panel : style.panelReserve}>
        <div className={style.pickUpPanel}>
            <input type="radio" id={id}
             checked={selected === id}
             onChange={handleChange}/>
            <span>{title}</span>
        </div>
        <div className={!reserveOpen? style.selectPanel : style.selectPanelReserve}>
            <LocationSelect disabled={disabled} selected={selected} form={form} setForm={setForm} reserveOpen={reserveOpen}/>
            <DateSelect disabled={disabled} selected={selected} form={form} setForm={setForm} reserveOpen={reserveOpen}/>
            <TimePanel disabled={disabled} selected={selected} form={form} setForm={setForm} reserveOpen={reserveOpen}/>
        </div>
    </div>
    )
}
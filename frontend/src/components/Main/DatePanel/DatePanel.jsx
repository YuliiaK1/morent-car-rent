import { useState, useContext } from "react";
import Context from "../Context"
import style from "./DatePanel.module.css"
import filterInput from "../../../assets/filter-input.svg"
import DateForm from "./DateForm";

function DatePanel({reserveOpen}) {
const [selected, setSelected] = useState('on');
const {isOpen, setIsOpen, pickUpForm, setPickUpForm, dropForm, setDropForm} = useContext(Context);

const handleChange = event => {
    setSelected(event.target.id);
  }; 
return (
   <div className={!reserveOpen? style.datePanel : style.datePanelReserve}>
        <DateForm 
            id="on" 
            selected={selected} 
            handleChange={handleChange} 
            title="Pick-Up" disabled="of" 
            form={pickUpForm} 
            setForm={setPickUpForm} 
            reserveOpen={reserveOpen} />
        {!reserveOpen && <button className={style.btnPanel} onClick={()=>setIsOpen(!isOpen)}><img src={filterInput} alt="Filter Cars" /></button>}
        <DateForm 
            id="of" 
            selected={selected} 
            handleChange={handleChange} 
            title="Drop-Off" disabled="on" 
            form={dropForm} setForm={setDropForm} 
            reserveOpen={reserveOpen} />
   </div>
  );
}

export default DatePanel;


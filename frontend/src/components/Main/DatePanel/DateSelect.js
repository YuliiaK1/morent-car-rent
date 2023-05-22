import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import style from "./DateSelect.module.css"

export default function DateSelect({disabled, selected, form, setForm, reserveOpen}) {
const [date, setDate] = useState(null);

const addValue = date => {
  const dateString = new Date(date).toLocaleDateString()
  setForm({...form,
    date: dateString
  });
  console.log(form);
};

  return (
    <div className={!reserveOpen? style.miniPanel : style.miniPanelReserve}>
        <span>Date</span>
        <DatePicker 
            className={!reserveOpen? style.datePicer : style.datePicerReserve}
            disabled={selected=== disabled} 
            selected={date} 
            value={form.date}
            placeholderText={form.date? form.date : "Select your date"}
            onChange={(date) => {
              setDate(date)
              addValue(date)
            }
            } 
            enableTabLoop={false}
            minDate={new Date()}
            maxDate={addDays(new Date(), 30)}
        />
</div>
  );
}
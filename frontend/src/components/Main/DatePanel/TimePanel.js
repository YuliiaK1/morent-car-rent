import style from "./TimePanel.module.css"
import "./CustomSelectStyle.css"
import Select from 'react-select'

export default function TimePanel({disabled, selected, form, setForm, reserveOpen}){
      const options = [
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        { value: '12:00', label: '12:00' },
        { value: '13:00', label: '13:00' },
        { value: '14:00', label: '14:00' },
        { value: '15:00', label: '15:00' },
        { value: '16:00', label: '16:00' },
        { value: '17:00', label: '17:00' },
        { value: '18:00', label: '18:00' }
      ];
        
      const addValue = event => {
        setForm({...form,
            time: event.value
          });
      };
    return (
        <div className={!reserveOpen? style.miniPanel : style.miniPanelReserve}>
          <span>Time</span>
            <Select
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null
              }} 
              className={!reserveOpen? "basic-single" : "basic-singleReserve"}
              classNamePrefix="select-box"
              placeholder={form.time? form.time : "Select your time"}
              isDisabled={disabled===selected}
              isSearchable={false}
              name="time"
              options={options}
              value={form.city}
              onChange={addValue}
            />
         </div>
    )   
}
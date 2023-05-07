import style from "./LocationSelect.module.css";
import "./CustomSelectStyle.css"
import DataCity from "../../../assets/DataStorage/DataCity.json";
import Select from 'react-select';
import { FixedSizeList as List } from "react-window";

export default function LocationSelect({disabled, selected, form, setForm, reserveOpen}) {
  const MenuList = ({ options, children, maxHeight, getValue }) => {
    const [value] = getValue();
    const height = 30;
    const initialOffset = options.indexOf(value) * height;
  
    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    );
  };
  

const addValue = event => {
  setForm({...form,
    city: event.city
  });
  console.log(form);
};

  return (
    <div className={!reserveOpen? style.miniPanel : style.miniPanelReserve}>
    <span>Locations</span>
      <Select
        components={{
          MenuList,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null
        }} 
        className={!reserveOpen? "basic-single" : "basic-singleReserve"}
        classNamePrefix="select-box"
        placeholder={form.city? form.city : "Select your city"}
        isDisabled={disabled===selected}
        name="city"
        options={DataCity}
        getOptionLabel={(option) => option.city}
        getOptionValue={(option) => option.country}
        value={form.city}
        onChange={addValue}
      />
   </div>
  );
}
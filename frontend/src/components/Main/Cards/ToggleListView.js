import {React, useState, useContext} from "react"; 
import Context from "../Context"
import style from "./ToggleListView.module.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleListView(){
    const [alignment, setAlignment] = useState('View All');
    const chooseList = ["Popular Car", "View All"]
    const {data, list, setList} = useContext(Context);

    const changeCardsList = (newAlignment)  =>{
      if (newAlignment==="Popular Car") {
        let temp = list.filter((item) => item.category===newAlignment);
        setList(temp)
      } else setList(data)
    };

    const handleChange = (event) => {
      let newAlignment = event.target.value;
      if (newAlignment.length) {
        setAlignment(newAlignment);
      }
      changeCardsList(newAlignment)
    };

    return (
        <ToggleButtonGroup
        className={style.cardsSection}
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{
          display: "flex"
        }}>
          {chooseList.map((item)=> (
            <ToggleButton key={item}
            value={item}
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '600',
              fontSize: '16px',
              textTransform: 'none',
              letterSpacing: '0',
              color: '#90A3BF',
              border: "none",
              backgroundColor: "none",
              padding: "10px 20px",
              '&.MuiButtonBase-root:hover': {
                backgroundColor: "rgb(246, 247, 249)"
              },
              '&.Mui-selected': {
                backgroundColor: "rgb(246, 247, 249)",
                color: "#3563E9"
              },
              '&.Mui-selected:hover' : {
                backgroundColor: "rgb(246, 247, 249)"
              },
              '&.MuiTouchRipple-root' : {
               dispay: "none"
              }
            }}>
              {item}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
    )
}
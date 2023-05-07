import Slider from '@mui/material/Slider';


const SliderPrice = ({ value, changePrice }) => {
    return (
      <>
        <Slider
            value={value}
            onChange={changePrice}
            valueLabelDisplay='on'
            min={50}
            max={100}
            style={{marginTop: "32px"}}
          />
      </>
    );
  };
  
  export default SliderPrice;
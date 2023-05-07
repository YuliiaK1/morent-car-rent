import style from "./EmptyValue.module.css"
import image from "../../../assets/no-found.png"

const EmptyValue = () => {
    return (
      <div className={style.emptyBlock} >
        <p>Failed to find cars matching search</p>
        <img src={image} width="50" height="50" alt="No found" />
      </div>
    );
  };
  
  export default EmptyValue ;
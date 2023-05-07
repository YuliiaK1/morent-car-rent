import style from "./SearchPanel.module.css"
import search from "../../../assets/search-input.svg"
import { useMediaQuery } from 'react-responsive'
import { useContext } from "react"
import Context from "../Context"


export default function SearchPanel(){
const isMaxMobile = useMediaQuery({ query: '(max-width: 560px)' })
const {setSearchField} = useContext(Context);

const handleChange = e => {
    setSearchField(e.target.value);
  };

    return (
        <div className={style.search}>
           <div className={style.menu}>
                <input type="text" placeholder="Search something here" onChange = {handleChange}/>
                {!isMaxMobile &&<span className={style.items}><img src={search} alt="Search"/></span>}
           </div>
           {isMaxMobile && <button className={style.btnSearch}><img src={search} alt="Search"/></button>}
        </div>
    )
}


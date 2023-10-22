import { useState, useRef, useEffect } from "react"
import style from "./UserPanel.module.css"
import {userPhoto, menu} from "../../../assets/DataStorage/Images"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import FavoritesBadge from "./Badge"
import { useMediaQuery } from 'react-responsive'
import { useSelector } from "react-redux";


export default function UserPanel(){
    const isMaxMobileL = useMediaQuery({ query: '(max-width: 650px)' })
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const favoritesList = useSelector(state=> state.favorites.favoritesList);

    const handleMenuClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);
    return (
        <div className={style.headerRight}>
                <Link to="favorites" style={{textDecoration: 'none'}}>
                    <FavoritesBadge amountFav={favoritesList.length}/>
                </Link>
                <span onClick={handleMenuClick}><img src={menu} width={24} alt="Open menu"/></span>
                {isDropdownOpen && 
                <div className={style.dropdownContent} ref={dropdownRef} onClick={handleMenuClick}>
                    <HashLink smooth to="about/#how-it-works" style={{textDecoration: 'none'}}>How it works</HashLink>
                    <HashLink smooth to="about/#featured" style={{textDecoration: 'none'}}>Featured</HashLink>
                    <HashLink smooth to="about/#partnership" style={{textDecoration: 'none'}}>Partnership</HashLink>
                    <HashLink smooth to="about/#business-relationship" style={{textDecoration: 'none'}}>Business Relationship</HashLink>
                    <HashLink smooth to="about/#events" style={{textDecoration: 'none'}}>Events</HashLink>
                    {isMaxMobileL && <HashLink smooth to="/" className={style.account}>
                    <img src={userPhoto} alt="User account"/>
                    <p>Account</p>
                    </HashLink>}
                </div>}
                <Link to={"/login"}  style={{textDecoration: 'none'}}><img src={userPhoto} className={style.imgAccount} alt="User account"/></Link>
        </div>
    )
}



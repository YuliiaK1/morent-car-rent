import { Link } from "react-router-dom"
import style from "./Footer.module.css"
import Title from "./MainHeader/Title";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div className={style.footerBlock}>
        <div className={style.leftBlock}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Title/>
            </Link>
            <h2>Our vision is to provide convenience and help increase your sales business.</h2>
        </div>
        <div className={style.rightBlock}>
            <ul>About
                <li><HashLink smooth to="about/#how-it-works" style={{textDecoration: 'none'}}>How it works</HashLink></li>
                <li><HashLink smooth to="about/#featured" style={{textDecoration: 'none'}}>Featured</HashLink></li>
                <li><HashLink smooth to="about/#partnership" style={{textDecoration: 'none'}}>Partnership</HashLink></li>
            </ul>
            <ul>Community
                <li><HashLink smooth to="about/#business-relationship" style={{textDecoration: 'none'}}>Business Relationship</HashLink></li>
                <li><HashLink smooth to="about/#events" style={{textDecoration: 'none'}}>Events</HashLink></li>
            </ul>
            <ul>Socials
                <li><a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
        </div>
        <div className={style.bottomBlock}>
            <div>&#169;2023.MORENT. All rights reserved</div>
            <div className={style.bottomRight}>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
            </div>
        </div>
    </div>
  );
}

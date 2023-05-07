import style from "./Partnership.module.css"
import partner from "../../../assets/partner.png"

export default function Partnership(props){
    return (
        <section id="partnership" className={style.partnership}>
            <h2>{props.title}</h2>
            <p>We are always looking for new partners who share our passion for cars and our commitment to exceptional customer service. Whether you are a car manufacturer, rental agency, or travel company, we would love to explore opportunities to work together.</p>
            <div className={style.partnerGrid}>
                <div className={style.partnerCard}>
                <img src={partner} alt="Partner 1" />
                <h3>Automaker</h3>
                <p>We partner with leading automakers to offer our customers the latest and greatest cars on the market. Contact us to learn more about our fleet partnership opportunities.</p>
                <a href="/">Learn More</a>
                </div>
                <div className={style.partnerCard}>
                <img src={partner} alt="Partner 2" />
                <h3>Rental Agency</h3>
                <p>Are you a rental agency looking to expand your network and reach new customers? We would love to partner with you to offer our customers a wider range of rental options.</p>
                <a href="/">Learn More</a>
                </div>
                <div className={style.partnerCard}>
                <img src={partner} alt="Partner 3" />
                <h3>Travel Company</h3>
                <p>If you are a travel company looking to offer your customers a unique and exciting travel experience, we can help. We offer custom rental packages and travel itineraries to suit any budget and style.</p>
                <a href="/">Learn More</a>
                </div>
            </div>
        </section>
    )
}
import style from "./Business.module.css"
import john from "../../../assets/john-doe.jpg"
import jane from "../../../assets/jane-smith.jpg"
import emiliia from "../../../assets/emiliia-clark.jpg"

export default function Business(props){
    return (
        <section id="business-relationship" className={style.businessRelations}>
            <h2>{props.title}</h2>
            <p>At our company, we believe that building strong business relationships is key to our success. We value our clients and partners, and strive to provide them with the highest level of service and support.</p>
            <div className={style.testimonialGrid}>
                <div className={style.testimonialCard}>
                <img src={john} alt="Client 1" />
                <h3>John Doe, CEO</h3>
                <p>"Our company has been working with this car rental service for several years now, and we couldn't be happier with the level of service and support they provide. They are always responsive and professional, and their fleet of cars is top-notch."</p>
                </div>
                <div className={style.testimonialCard}>
                <img src={jane} alt="Client 2" />
                <h3>Jane Smith, Marketing Director</h3>
                <p>"We recently partnered with this car rental service for a promotional campaign, and they were fantastic to work with. They understood our needs and goals, and helped us create a custom rental package that exceeded our expectations."</p>
                </div>
                <div className={style.testimonialCard}>
                <img src={emiliia} alt="Client 3" />
                <h3>Emiliia Clark, Travel Agent</h3>
                <p>"I have been recommending this car rental service to my clients for years, and they have never let me down. Their prices are competitive, their cars are always in great condition, and their customer service is excellent."</p>
                </div>
            </div>
        </section>
    )
}
import style from "./Events.module.css"
import event1 from "../../../assets/event1.jpg"
import event2 from "../../../assets/event2.jpg"
import event3 from "../../../assets/event3.jpg"

export default function Events(props){
    return (
        <section id="events" className={style.events}>
            <h2>{props.title}</h2>
            <p>Join us for exciting car-related events throughout the year. From car shows and racing events to road trips and scenic drives, we offer a variety of experiences to suit any car enthusiast.</p>
            <div className={style.eventGrid}>
                <div className={style.eventCard}>
                <img src={event1} alt="Event 1" />
                <h3>Classic Car Show</h3>
                <p>Join us for a day of vintage car appreciation at our annual Classic Car Show. Featuring a range of restored and original classic cars, this event is a must-see for any car enthusiast.</p>
                <a href="/">Book a place</a>
                </div>
                <div className={style.eventCard}>
                <img src={event2} alt="Event 2" />
                <h3>Road Trip Adventure</h3>
                <p>Hit the open road with our Road Trip Adventure event. Explore scenic routes, enjoy delicious local cuisine, and bond with fellow car enthusiasts on a journey you won't forget.</p>
                <a href="/">Book a place</a>
                </div>
                <div className={style.eventCard}>
                <img src={event3} alt="Event 3" />
                <h3>Track Day Experience</h3>
                <p>Take your driving skills to the next level with our Track Day Experience. Learn from professional drivers, test your skills on a racetrack, and experience the thrill of high-speed driving.</p>
                <a href="/">Book a place</a>
                </div>
            </div>
        </section>
    )
}
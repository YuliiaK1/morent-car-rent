import style from "./Featured.module.css"
import video from "../../../assets/video.mp4"

export default function Featured(props){
    return (
        <section id="featured" className={style.featured}>
        <h2>{props.title}</h2>
        <p>Our Popular cars section showcases some of the best cars in our fleet. These cars are handpicked by our team for their exceptional performance, style, and features.</p>
        <div>
        <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4"/>
        </video>
        </div>
        </section>
    )
}
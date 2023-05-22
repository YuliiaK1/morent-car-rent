import style from "./Description.module.css"

export default function Description(props){
    return (
        <section id="how-it-works" className={style.howItWorks}>
            <h2>{props.title}</h2>
            <ol>
                <li><strong>Choose your car:</strong> Browse through our selection of cars and choose the one that best fits your needs. Use our filter to narrow down your search based on price, body type, and number of seats.</li>
                <li><strong>Pick-up and drop-off location:</strong> Select the location where you want to pick up and drop off the car. We have multiple locations for your convenience.</li>
                <li><strong>Make a reservation:</strong> Once you have chosen your car and pick-up/drop-off location, you can make a reservation by providing us with your personal details and payment information.</li>
                <li><strong>Pick up your car:</strong> On the day of your rental, go to the designated pick-up location and our friendly staff will help you with the rental process. You will need to provide a valid driver's license and sign the rental agreement.</li>
                <li><strong>Enjoy your ride:</strong> Once you have picked up your car, you are free to explore and enjoy your trip. Just remember to return the car on time and in the same condition as when you received it.</li>
                <li><strong>Return the car:</strong> At the end of your rental period, return the car to the designated drop-off location. Our staff will check the car for any damages and fuel level before completing the rental process.</li>
            </ol>
            <p>Thank you for choosing our car rental service. We hope you have a great experience with us!</p>
        </section>
    )
}
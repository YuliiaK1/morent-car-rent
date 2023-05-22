import Description from "./Description"
import Featured from "./Featured"
import Partnership from "./Partnership"
import Business from "./Business"
import Events from "./Events"


export default function AboutPage(){
    return (
       <div>
            <Description title="How it works"/>
            <Featured title="Featured Cars"/>
            <Partnership title="Partnership Opportunities"/>
            <Business title="Building Strong Business relationship"/>
            <Events title="Upcoming Events"/>
       </div>
    )
}
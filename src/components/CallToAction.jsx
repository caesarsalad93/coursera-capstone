import Chicago from "./Chicago"
import restaurant from "../assets/restaurant.jpg"
const CallToAction = () => {
    return (
    <div className="callToActionContainer">
        <Chicago />
        <div className ="ctaImg">
            <img src={restaurant}></img>
        </div>
    </div>
    )
}

export default CallToAction;
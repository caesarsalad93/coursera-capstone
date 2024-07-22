import Chicago from "./Chicago"
import food from "../assets/restauranfood.jpg"
const CallToAction = () => {
    return (
    <div className="callToActionContainer">
        <Chicago />
        <img className ="ctaImg" src={food} width="375px" height="325px"></img>
    </div>
    )
}

export default CallToAction;
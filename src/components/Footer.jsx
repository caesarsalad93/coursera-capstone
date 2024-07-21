import footerImage from "../assets/restauranfood.jpg";
import Nav from "./Nav";

const Footer = () => {
    return (
        <footer>
            <div>
                <img className="footerImage" src={footerImage} alt="image of food" width="200" height="250"></img>
            </div>
           
            <div className="doormat">
                <Nav section="bottomNav"/>
            </div>
            <div className="contactsList">
                <span>Contact</span>
                <span>247 Tuscany Drive, Naples, FL 34109, USA</span>
                <span>contact@littlelemonrestaurant.com</span>
                <span>(239) 555-0198</span>
            </div>
            <div className="socialsList">
                <span>Social Media Links</span>
            </div>
        </footer>
    )
}

export default Footer;
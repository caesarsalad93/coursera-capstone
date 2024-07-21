import footerImage from "../assets/restauranfood.jpg";

const Footer = () => {
    return (
        <footer>
            <div>
                <img className="footerImage" src={footerImage} alt="image of food" width="200" height="250"></img>
            </div>
           
            <div className="doormat">
                <ul className="doormatList">
                    <li><a href="./home">HOME</a></li>
                    <li><a href="./home">ABOUT</a></li>
                    <li><a href="./home">MENU</a></li>
                    <li><a href="./home">RESERVATIONS</a></li>
                    <li><a href="./home">ORDER ONLINE</a></li>
                    <li><a href="./home">LOGIN</a></li>
                </ul>
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
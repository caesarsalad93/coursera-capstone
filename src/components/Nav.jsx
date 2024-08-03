import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";

const Nav = ({ section }) => {
    return (
        <>
        <nav className={section}>
        <img src={logo} alt="Little Lemon Logo"></img>
            <Link to="/" className="navItem">HOME</Link>
            <Link to="/" className="navItem">ABOUT</Link>
            <Link to="/" className="navItem">MENU</Link>
            <Link to="/reservations" className="navItem">RESERVATIONS</Link>
            <Link to="/" className="navItem">ORDER ONLINE</Link>
            <Link to="/" className="navItem">LOGIN</Link>
        </nav>
        </>

    )
}
export default Nav;
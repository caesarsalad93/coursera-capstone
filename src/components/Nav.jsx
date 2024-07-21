import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";

const Nav = ({ section }) => {
    return (
        <>
        <nav className={section}>
        <img src={logo} alt="Little Lemon Logo"></img>
            <Link to="/" className="nav-item">HOME</Link>
            <Link to="/" className="nav-item">ABOUT</Link>
            <Link to="/" className="nav-item">MENU</Link>
            <Link to="/" className="nav-item">RESERVATIONS</Link>
            <Link to="/" className="nav-item">ORDER ONLINE</Link>
            <Link to="/" className="nav-item">LOGIN</Link>
        </nav>
        </>

    )
}
export default Nav;
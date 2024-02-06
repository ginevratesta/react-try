import "./header.css";
import logo from "../images/pic.jpeg"

const Header = () => {
    return (
        <header className="header">
            <img src = {logo} alt="logo"></img>
            <h2>WOW HEADER</h2>
            <img src = {logo} alt="logo"></img>
            </header>
    )
}

export default Header
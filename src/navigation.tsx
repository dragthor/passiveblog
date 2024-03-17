import { Link } from "react-router-dom"

interface NavigationProps {
    homeActive: boolean,
    aboutActive: boolean
}

function Navigation(props: NavigationProps) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to={"/"} className={props.homeActive ? "nav-link active" : "nav-link"} title="Home" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to={"/about"} className={props.aboutActive ? "nav-link active" : "nav-link"} title="About" >About</Link>
            </li>

            <li className="nav-item">
                <a href="https://github.com/dragthor/passiveblog" target="_blank" className="nav-link">Source Code</a>
            </li>
        </ul>)
};

export default Navigation;
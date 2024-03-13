interface NavigationProps {
    homeActive: boolean,
    aboutActive: boolean
}

function Navigation(props: NavigationProps) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={props.homeActive ? "nav-link active" : "nav-link"} href="/" title="Home">Home</a>
            </li>
            <li className="nav-item">
                <a className={props.aboutActive ? "nav-link active" : "nav-link"} href="/about" title="About">About</a>
            </li>
        </ul>)
};

export default Navigation;
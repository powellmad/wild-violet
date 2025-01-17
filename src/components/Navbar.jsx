import "../styles/Navbar.css"

function Navbar () {

    return (
        <nav className="navbar">
            <header className="header">
                <img src="/violets_xsmall.svg" alt="wild violet logo of two wild violets"/>
                <h3>Wild Violet Counseling</h3>
            </header>
            <ul>
                <li>Welcome</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
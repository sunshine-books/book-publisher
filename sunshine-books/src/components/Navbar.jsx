import { Link } from "react-router";

function Navbar() {
    return (
        <div className='nav-bar'>
            <h1>NAVBAR</h1>
            <Link to="/">HOME PAGE</Link>
            <br></br>
            <Link to="/my-lists">SEARCH BAR</Link>
            <br></br>
            <Link to="/about">ABOUT</Link>
        </div>
    )
}

export default Navbar
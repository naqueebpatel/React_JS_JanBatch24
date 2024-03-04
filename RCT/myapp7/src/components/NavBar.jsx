import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", background:"pink",height:"50px" }}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
        </div>
    )
}

export default NavBar
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (

        <nav className="navbar sticky-top navbar-dark bg-dark justify-content-center">
            <ul className="nav ">
                <li className="nav-item">
                    <NavLink to="/" className="btn btn-outline-primary mx-4">App Rick & Morty</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/todoapp" className="btn btn-outline-primary mx-4">App ToDo</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" className="btn btn-outline-primary mx-4">Blog</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacto" className="btn btn-outline-primary mx-4">Contacto</NavLink>
                </li>
            </ul>
        </nav >

    )
}

export default Navbar

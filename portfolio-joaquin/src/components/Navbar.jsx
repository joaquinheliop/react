import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


const Navbar = () => {

    const { user } = useContext(UserContext)

    return (

        <nav className="navbar sticky-top navbar-dark bg-dark justify-content-center">
            <ul className="nav ">
                <li className="nav-item">
                    <NavLink to="/" className="btn btn-outline-primary mx-4">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/apirick" className="btn btn-outline-primary mx-4">App Rick & Morty</NavLink>
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
            <Link to='/'> {user ? 'Conectado' : 'Desconectado'}</Link>
        </nav >

    )
}

export default Navbar

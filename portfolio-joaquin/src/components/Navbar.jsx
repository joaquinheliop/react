import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

const colorPrimario = `#0B5ED7`

const Navbar = styled.div`
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    padding: 20px;
    grid-area: header;
    background-color: white;
    height: 4.375rem;
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
`

const Navlink = styled(NavLink)`
    text-decoration: none;
    color: inherit;

    &:hover{
        color: ${colorPrimario} ;
    }
`

const NavBar = () => {


    const { user } = useContext(UserContext)

    return (
        <Navbar>
            <h4 className="pe-1 mb-0">Navbar | </h4>
            <Navlink to={`/`} >
                <h5 className="ps-1 mb-0">{user ? 'Joaquin Helio Perez' : 'Desconectado'}</h5>
            </Navlink>
        </Navbar>

    );
};

export default NavBar;

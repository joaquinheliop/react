import { useContext } from "react";
import styled from "styled-components";
import logo192 from '../assets/img/logo192.png'
import { UserContext } from "../context/UserProvider";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";

const colorPrimario = `#0B5ED7`

const Aside = styled.aside`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-right: 1px solid ${colorPrimario};
    background-color: black;
    color: white;
    padding: 20px;
`

const Ul = styled.ul`
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    padding: 0;
    text-align: center;
 `

const Navlink = styled(NavLink)`
    text-decoration: none;
    color: inherit;

    &:hover{
        color: ${colorPrimario} ;
    }
`

const SideBar = () => {


    const { user } = useContext(UserContext)

    const nameListItem = ['Rick and Morty', 'Todo App', 'Blog', 'Contacto']

    return (
        <Aside>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo192} style={{ height: '100px', width: '100px' }}></img>

            </div>
            <hr style={{ height: '1px', backgroundColor: 'white' }} />

            <Ul>
                {nameListItem.map((item, index) => (
                    <ListItem name={item} color={colorPrimario} vista={index} key={index}></ListItem>
                ))}
            </Ul>

            <hr style={{ height: '1px', backgroundColor: 'white' }} />
            <Navlink to={`/`}>
                <h6 className="text-center">{user ? 'Joaquin Helio Perez' : 'Desconectado'}</h6>
            </Navlink>

        </Aside >
    )

};

export default SideBar;

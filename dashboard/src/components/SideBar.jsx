import styled from "styled-components";
import logo192 from '../assets/img/logo192.png'
import ListItem from "./ListItem";

const colorPrimario = `#5aa712`

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

const SideBar = () => {

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
            <h6 className="text-center">Joaquin Helio Perez</h6>
        </Aside >
    )

};

export default SideBar;

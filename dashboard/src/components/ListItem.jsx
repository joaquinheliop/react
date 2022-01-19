import styled from "styled-components"
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const ListItem = ({ name, vista, color }) => {

    const LI = styled.li`
        font-family: 'Roboto', 'sans-serif';
        color: white;
        padding: 20px;
        text-align: center;
    `

    const Div = styled.div`

        transition-duration: 0.5s;
        padding-right: 1em; 

        &:hover {
            padding-right: 10px;
            border-radius: 5px;
                background-color:${color};
                cursor: pointer;
            }
           
    `
    return (
        <NavLink to={`/${vista}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Div className="d-flex flex-row justify-content-between align-items-center pr-4" >
                < LI >
                    {name}
                </LI >
                <BsChevronRight />
            </Div >
        </NavLink>

    )
}

export default ListItem


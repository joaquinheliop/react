import { Outlet } from "react-router-dom";
import styled from "styled-components";


const Content = () => {

    const Content = styled.div`
    z-index: 0;
        grid-area: content;
        display: flex;
        flex-direction: row ;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 25px;
    `

    return (
        <Content>
            <Outlet />
        </Content>

    )
};

export default Content;

import styled from "styled-components";

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

const NavBar = () => {
    return (
        <Navbar>
            <h4 className="pe-1 mb-0">Navbar | </h4>
            <h5 className="ps-1 mb-0">Joaquin</h5>
        </Navbar>

    );
};

export default NavBar;

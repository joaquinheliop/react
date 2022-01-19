import styled from 'styled-components'
import Content from './components/Content';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';



const Container = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 4.375rem 1fr;
    grid-template-areas:
        "sidebar header"
        "sidebar content";
    height: 100vh;
`

const App = () => {

  return (
    <Container>
      <NavBar />
      <SideBar />
      <Content />
    </Container>
  )
};

export default App;

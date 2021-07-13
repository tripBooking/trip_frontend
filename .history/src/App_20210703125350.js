import styled from 'styled-components'
import background from './images/truckBackground.jpg'
import fonts from './utills/fonts'
import Nav from './components/Navbar'
const Main = styled.div`
background-image: url(${background});
background-position:'center';
background-size: cover;
background-repeat: no-repeat;
background-position-y:70%;
backdrop-filter: blur(6px);
min-height: 100vh;
.bkgFilter{
  position: absolute;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,.4);
  backdrop-filter: blur(5px);
}

`
function App() {
  return (
    <Main className="App">
      <Nav/>
    </Main>
  );
}

export default App;

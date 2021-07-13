import styled from 'styled-components'
import background from './images/truckBackground.jpg'
const Main = styled.div`
background-image: url(${background});
background-position:'center';
background-size: cover;
background-repeat: no-repeat;
background-position-y:70%;
min-height: 100vh;
.bkgFilter{
  position: absolute;
  height: 100vh;
  width:100vw;
  background: black;
}

`
function App() {
  return (
    <Main className="App">
      <div className={'bkgFilter'}/>
    </Main>
  );
}

export default App;

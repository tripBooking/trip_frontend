import styled from 'styled-components'
import background from './images/truckBackground.jpg'
const Main = styled.div`
background-image: url(${background});
background-position:'center';
background-size: cover;
background-repeat: no-repeat;
background-position-y:20%;
min-height: 100vh;

`
function App() {
  return (
    <Main className="App">
start
    </Main>
  );
}

export default App;

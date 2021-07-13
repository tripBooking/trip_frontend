import styled from 'styled-components'
import background from './images/truckBackground.jpg'
import {fonts,colors} from './utills/fonts'
import {Switch,Route} from 'react-router-dom'

// =============================================================================
// Components
import Nav from './components/Navbar'
import Home from './components/Home'
// =============================================================================


// =============================================================================
// Styled Component
const Main = styled.div`
background-image: url(${background});
background-position:'center';
background-size: cover;
background-repeat: no-repeat;
background-position-y:70%;
backdrop-filter: blur(6px);
min-height: 100vh;
overflow-x: hidden;
.bkgFilter{
  position: absolute;
  min-height: 100vh;
  width:100vw;
  background: rgba(0,0,0,.4);
  z-index: 0;
  /* backdrop-filter: blur(5px); */
}

// =============================================================================
// Constants
.sectionTitle{
  text-align: center;
  font-size: 2.5em;
  @media (min-width:2000px){
    font-size:4em;
  }
}
 .bolded{
    color:${colors.orange}
  }
  
  .moreTxt{
    color:${colors.lightOrange};
    font-family: ${fonts.compressed.family};
    font-weight: ${fonts.compressed.weight};
    word-spacing:2%
  
    }
// =============================================================================

`
// =============================================================================

function App() {
  return (
    <Main className="App">
      <div className={'bkgFilter'}>
        <Nav />
        <Switch>
          <Route path='/' >
            <Home/>
          </Route>
        </Switch>

      </div>
    </Main>
  );
}

export default App;

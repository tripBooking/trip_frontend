/**==============================================
 * ?                    ABOUT
 * @author      : D'onta Hobson
 * @email       : hobsond26@icloud.com
 * @repo        : 
 * @createdOn   : July 2nd 2021
 * @description : Made for potetntial admin to manage schedules, by creating a site
 * where users can view scheduled events, sign up for event and make payment. A user
 * can schedule personalized events with the admin,.If the admin confirms the users request
 * for an event the change in schedule will be reflected to other users.
 *=============================================**/


import React, { useState,useContext} from 'react'
import styled from 'styled-components'
import background from './images/truckBackground.jpg'
import {fonts,colors} from './utills/fonts'
import { Switch, Route,useHistory } from 'react-router-dom'
import MainContext from './utills/context'
import {tours} from './utills/mockData'
import gsap from 'gsap'
// =============================================================================
// Components
import Nav from './components/Navbar'
import Home from './components/Home'
import Tours from './components/Tours'
import Events from './components/Events'
import EventItem from './components/EventItem'
import Booking from './components/Booking'
import Contact from './components/Contact'
import TourItem from './components/TourItem'
import TourSignup from './components/Tours_Signup'
import Checkout from './components/Checkout'
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
    font-size:1.3em;
    cursor: pointer;

    // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  font-size:1.3em ;
  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  font-size: 1.4em;
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  }


// for 4k
@media (min-width: 2000px) {
  font-size: 2.3em;
  }
  
    }
.divider{
  width:100%;
  background: white;
  height: .3em;
}
 .secondary{
            background-color: ${colors.orange};
        }
// =============================================================================

`// =============================================================================

function App() {
  /*================== States =================*/

  const {push} = useHistory()
  
  /*=============================================*/
  return (
    <Main className="App">
      <div className={'bkgFilter'}>
        <Nav push={push} />
        <Switch>
          <MainContext.Provider value={{tours}}>
            <Route path='/tours/signup/:id' component={TourSignup}/>
            <Route exact path='/tours/:id' component={TourItem} />
            <Route path='/events/:id' component={EventItem} />
            <Route path='/booking' component={Booking} />
            <Route path='/contact' component={Contact} />
            
          <Route exact path="/checkout/:id" component={Checkout}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/tours' component={Tours}/>
          <Route exact path='/' component={Home} />

          </MainContext.Provider>
            
          
        </Switch>

      </div>
    </Main>
  );
}

export default App;

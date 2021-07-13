import React from 'react'
import styled from 'styled-components'
import {fonts} from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:7vh;
color:white;
display: none;
align-items: baseline;
padding:0 1%;
/* border:solid 1px white; */
#siteTitle{
    cursor:pointer;

    font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    font-size: 2em;
    margin-left: 1%;
    width:40%;
    margin-top:4%;
}
#linksContainer{
    display:flex;
    justify-content: space-between;
    width:30%;
    margin-left:15%;
    .links{
        font-size:1.2em;
          font-family: ${fonts.compressed.family};
    font-weight: ${fonts.compressed.weight};
    cursor:pointer;
    }
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    display:flex;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    height:9vh;
    #siteTitle{
        margin-top:1%;
        font-size: 2.4em;
        margin-left:5%;
    }
    #linksContainer{
        .links{
            font-size: 1.7em;
        }
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  #siteTitle{
        font-size: 2.8em;
    }
    #linksContainer{
        .links{
            font-size: 2.1em;
        }
    }
 }
// For 4k screens
 @media (min-width:2000px){
     height:9vh;
     #siteTitle{
         margin-left:9%;
         font-size: 4em;
         margin-top: 2%;
     }
     #linksContainer{
         margin-left:8%;
         width:30%;
         .links{
             font-size: 2.5em;
         }
     }
 }
`
export default function NavContainer(props) {
    return (
        <Nav>
            <h1 id='siteTitle'>Bucks Trucking Trips</h1>

            <div id="linksContainer">
                <h4 onClick={ ()=>props.push('/tours')} className={'links'}>Tours</h4>
                <h4 className={'links'}>Events</h4>
                <h4 className={'links'}>Contact</h4>
            </div>
        </Nav>
    )
}

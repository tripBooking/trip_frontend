import React from 'react'
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:7vh;
color:white;
display: none;
align-items: baseline;
padding:0 1%;
/* border:solid 1px white; */
#siteTitle{
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
    #siteTitle{
        margin-top:2%;
        font-size: 2em;
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    #linksContainer{
        width:25%;
        .links{
            font-size: 1.5em;
        }
    }
 }
// For 4k screens
 @media (min-width:2000px){
     height:10vh;
     #siteTitle{
         margin-left:9%;
         font-size: 4em;
         margin-top: 2%;
     }
     #linksContainer{
         width:40%;
         .links{
             font-size: 2em;
         }
     }
 }
`
export default function NavContainer() {
    return (
        <Nav>
            <h1 id='siteTitle'>Bucks Trucking Trips</h1>

            <div id="linksContainer">
                <h4 className={'links'}>Trips</h4>
                <h4 className={'links'}>Events</h4>
                <h4 className={'links'}>Contact</h4>
            </div>
        </Nav>
    )
}

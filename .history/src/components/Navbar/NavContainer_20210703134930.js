import React from 'react'
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:7vh;
color:white;
display: flex;
align-items: baseline;
padding:0 1%;
border:solid 1px white;
#siteTitle{
    font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    font-size: 1.6em;
    margin-left: 1%;
    width:40%;
    margin-top:4%;
}
#linksContainer{
    display:flex;
    justify-content: space-between;
    width:30%;
    .links{
        font-size:1rem;
          font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    }
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
    display:none;
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    display:flex;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    #siteTitle{
        margin-top:2%
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { }
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

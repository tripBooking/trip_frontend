import React from 'react'
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:10vh;
color:white;
display: flex;
align-items: baseline;
padding:0 5%;
#siteTitle{
    font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    font-size: 2.5rem;
    margin-left: 12%;
    width:40%;
    margin-top:3%;
}
#linksContainer{
    display:flex;
    margin-left:12%;
    justify-content: space-between;
    /* border:solid 1px white; */
    width:30%;
    .links{
        font-size:2rem;
          font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
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

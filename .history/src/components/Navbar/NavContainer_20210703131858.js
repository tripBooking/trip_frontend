import React from 'react'
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:10vh;
color:white;
display: flex;
align-items: flex-end;
padding:0 5%;
#siteTitle{
    font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
}
`
export default function NavContainer() {
    return (
        <Nav>
            <h1 id='siteTitle'>Bucks Trucking Trips</h1>
        </Nav>
    )
}

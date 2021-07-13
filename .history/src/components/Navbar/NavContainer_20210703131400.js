import React from 'react'
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Nav = styled.nav`
background:rgba(0,0,0,.72);
height:10vh;
color:white;
`
export default function NavContainer() {
    return (
        <Nav>
            <h1>Bucks Trucking Trips</h1>
        </Nav>
    )
}

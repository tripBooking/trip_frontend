import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
height:100vh;
background:blue;
width:100vw;
color:white
`
export default class componentName extends Component {
  render() {
    return (
      <Main> textInComponent </Main>
    );
  }
}

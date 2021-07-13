import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'
const Main = styled.main`
height:100vh;
background:blue;

`

export default class HomeContainer extends Component {
  render() {
    return (
      <Main> textInComponent </Main>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
min-height:100vh;
color:white
`
export default class componentName extends Component {
  render() {
    return (
      <Main> textInComponent </Main>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
min-height:100vh;
padding-top: 10%;
color:white;
display:flex;
flex-wrap:wrap;
#homeContainers{
    width:50%;
    height:80vh;
}
#actionsContainer{
}

#recentBox{

}
`
export default class componentName extends Component {
  render() {
    return (
        <Main>
            <div id='actionsContainer' className={'homeContainers'}>
            </div>

            <div id="recentBox" className={'homeContainers'}></div>
        </Main>
    );
  }
}

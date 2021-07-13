import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
height:100vh;
overflow-y:scroll;
padding-top: 10%;
color:white;
display:flex;
flex-wrap:wrap;
.homeContainers{
    width:80%;
    height:80vh;
    border:solid white 1px;
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

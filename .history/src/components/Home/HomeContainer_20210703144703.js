import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
height:80vh;
overflow-y:scroll;
padding-top: 10%;
color:white;
display:flex;
flex-wrap:wrap;
justify-content: center;
.homeContainers{
    width:90%;
    height:50vh;
    border:solid white 1px;
}
#actionsContainer{
}

#recentBox{
    margin-top:10%;

}
`
export default class componentName extends Component {
  render() {
    return (
        <Main>
            <div id='actionsContainer' className={'homeContainers'}>
                <div className={'actions'}></div>
                <div className={'actions'}></div>
            </div>

            <div id="recentBox" className={'homeContainers'}></div>
        </Main>
    );
  }
}

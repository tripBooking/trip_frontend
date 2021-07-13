import React, { Component } from 'react';
import styled from 'styled-components'
import fonts from '../../utills/fonts'

const Main = styled.main`
height:95vh;
overflow-y:scroll;
padding-top: 5%;
color:white;
display:flex;
flex-wrap:wrap;
justify-content: center;
.homeContainers{
    width:90%;
    height:70vh;
    border:solid white 1px;
}
#actionsContainer{
    display:flex;
    .actions{
        height:20vh;
        background: rgba(0,0,0,.63);
        border:solid white 1px
        width:100%;
    }
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

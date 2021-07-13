import React, { Component } from 'react';
import styled from 'styled-components'
import {fonts,colors} from '../../utills/fonts'

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
    /* flex-wrap:wrap; */
    flex-direction: column;
    align-items: center;
    border:none;
    margin-top:10%;
    .actions{
        height:30vh;
        background: rgba(0,0,0,.63);
        border:solid white 1px;
        width:90%;
        border-radius: .7em;
        display:flex;
        flex-direction: column;
        align-items: center;
        .actionTitles{
            font-size: 2em;
            text-align: center;
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};
            line-height:1.2em;
            .bolded{
                color:${colors.orange}
            }
        }
        &:nth-child(2){
            margin-top:10%;
        }
        button{
            width:70%;
            height:3rem;
            border-radius: .7em;
        }
       
    }
}

#recentBox{
    margin-top:20%;

}
`
export default class componentName extends Component {
  render() {
    return (
        <Main>
            <div id='actionsContainer' className={'homeContainers'}>

                <div className={'actions'}>
                    <h2 className={'actionTitles'}>
                        Place your <strong className={'bolded'}> spot </strong> on the next city <strong className={'bolded'}>Tour</strong>
                    </h2>
                    <button className={'actionsBtn'} >View Tours </button>
                </div>


                <div className={'actions'}></div>
            </div>

            <div id="recentBox" className={'homeContainers'}></div>
        </Main>
    );
  }
}

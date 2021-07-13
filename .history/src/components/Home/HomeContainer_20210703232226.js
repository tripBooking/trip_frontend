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
        .actionsBtn{
            width:80%;
            height:3rem;
            border-radius: .6em;
            border:white 1px solid;
                background: ${colors.blue};
                color:white;
                font-size: 1.3em;
                font-family: ${fonts.regular.family};
                font-weight: ${fonts.regular.weight};
                outline:none;
            
        
        }
        .secondary{
            background-color: ${colors.orange};
        }
       
    }
}

#recentBox{
    margin-top:20%;

}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
    #actionsContainer{
        .actions{
            .actionTitles{
                width:80%;
            }
            .actionsBtn{
                height:3.4em;
            }
        }
    }
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
       #actionsContainer{
        .actions{
            .actionTitles{
                width:70%;
                font-size: 2.5em;
            }
            .actionsBtn{
                height:3.4em;
            }
        }
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    /* align-items: center; */
    padding:0;
    .homeContainers{
        width: 45%;
    }
       #actionsContainer{
           margin-top: 0;
           margin-left:15%;
        .actions{
            .actionTitles{
                width:80%;
            }
            .actionsBtn{
                height:3em;
                &:nth-child(1){
                    margin-bottom: 40%;
                }

            }
        }
    }
    #recentBox{
        margin:0;
        margin-left:auto;
        width:30%;


        /* justify-self:flex-end; */
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }




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

                <div className={'actions'}>
                    <h2 className={'actionTitles'}>
                     Check Out Personal Booking 
                    </h2>
                    <button className={'actionsBtn secondary'} >Book Today</button>
                </div>


            </div>

            <div id="recentBox" className={'homeContainers'}></div>
        </Main>
    );
  }
}

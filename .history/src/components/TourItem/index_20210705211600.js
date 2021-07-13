import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors} from '../../utills/fonts'
const TourItem = styled.div`
height:96vh;
display: flex;
justify-content: center;
align-items: flex-start;
    /* border:solid white 1px; */
overflow-y:scroll;

margin-top:.4em;
#tourItem_Container{
    height:110vh;
    background:${colors.darkBkg};
    width:96%;
    position: relative;
    /* border:solid white 1px; */
    border-bottom: none;
    color:white;
    /* overflow-y: scroll; */
#bookBtn{
position:absolute;
top:21%;
left:69%;
font-size: 1.2em;
height: 2.5em;
z-index: 4;
width:8em;
background:${colors.orange};
color:white;
border:none;
border-radius:.3em;

    }
#headlineImgCont{
    height:30vh;
    background:lightslategray;
    border-radius: .5em .5em 0 0 ;
    display:flex;
    justify-content: center;
    align-items: center;
    #tourItem_title{
        margin-bottom: .5em;
        align-self: flex-end;
        }
    }

#tourItem_innerCont{
    /* height: 89%; */
    height:83vh;
    position: relative;
    bottom:1em;
    #tourItem_infoCont{
        border:solid white 1px;
        margin:0 auto;
        height:88%;
        overflow-y: scroll;
        margin-top:1em;
        padding:1em 0 ;
        .infoItem_Cont{
            height:35vh;
            background:lightgray;
            margin-top:1em;
        }
       
    }

    }
}


`
export default class Tour_Item extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <TourItem>
                <div id='tourItem_Container'>
                            {/* <button id="bookBtn">Book now</button> */}

                    <div id="headlineImgCont">
                        <h2 id='tourItem_title' className={"sectionTitle"}>4th of july Love</h2>

                    </div>
                    <div id="tourItem_innerCont">
                        <div id="tourItem_infoCont">
                            //d
                            <div className={"infoItem_Cont"}>
                                <h3>Stops</h3>
                            </div>
                            <div className={"infoItem_Cont"}>
                                <h3>Stops</h3>
                            </div>
                            <div className={"infoItem_Cont"}>
                                <h3>Stops</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </TourItem>
        )
    }
}

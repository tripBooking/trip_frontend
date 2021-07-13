import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'
const TourItem = styled.div`
height:96vh;
display: flex;
justify-content: center;
align-items: flex-start;
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
        height:98%;
        overflow-y: scroll;
        margin-top:1em;
        padding:1em 0 ;

        .infoItem_Cont{
            height:35vh;
            margin-bottom:2.5em;
            padding:0 .2em;
            .infoItem_Title{
                font-family: ${fonts.compressed.family};
                font-weight: ${fonts.compressed.weight};
                font-size:1.8em;
            }
            .infoItem_innerCont{
                height:30vh;
                /* background:blue; */
                border:solid 1px white;
                width:94%;
                margin:0 auto;
                margin-top:.7em;
                border-radius: .6em;
                .infoItem_aboutItem{
                    height:2em;
                };
            }
            #infoItem_stopCont{
                display:flex;
                font-size: 2em;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items:flex-start;

            }
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
        const stops =    [
            'eastern blvd ',
            'western Heights',
            'lilly st',
            "Mlk blvd"
        ]
        const about = ''

        return (
            <TourItem>
                <div id='tourItem_Container'>
                            {/* <button id="bookBtn">Book now</button> */}

                    <div id="headlineImgCont">
                        <h2 id='tourItem_title' className={"sectionTitle"}>4th of july Love</h2>

                    </div>
                    <div id="tourItem_innerCont">
                        <div id="tourItem_infoCont">
                          {  /*================== info Items =================*/}
                            <div id='infoITem_stops' className={"infoItem_Cont"}>
                                <h3 className={'infoItem_Title'}>Stops</h3>
                                <div id='infoItem_stopCont' className={'infoItem_innerCont'}>
                                       {stops.map(i => {
                                        return <h5 className={'infoItem_aboutItem'}> {i} </h5>
                                    })}
                                </div>
                            </div>

                            <div className={"infoItem_Cont"}>
                                <h3 className={'infoItem_Title'}>About</h3>
                                <div className={'infoItem_innerCont'}>
                                 
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
            </TourItem>
        )
    }
}

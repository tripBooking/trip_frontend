import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors} from '../../utills/fonts'
const TourItem = styled.div`
height:95vh;
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
#headlineImgCont{
    height:30vh;
    background:lightslategray;
    border-radius: .5em .5em 0 0 ;

}

#tourItem_title{
    margin-bottom:.73em;
    text-align: left;
    margin-left:.5em;
}
#tourItem_innerCont{
    /* height: 89%; */
    height:78vh;
    position: relative;
    bottom:5em;
    #tourItem_infoCont{
        border:solid white 1px;
        margin:0 auto;
        height:94%;
        overflow-y: scroll;
        margin-top:1em;
        padding:1em 0 2em 0 ;
        .infoItem_Cont{
            height:35vh;
            background:lightgray;
            margin-top:1em;
        }
       
    }
     #bookBtn{
            position:absolute;
            top:71vh;
            left:73vw;
            font-size: 1.2em;
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
                    <div id="headlineImgCont"></div>
                    <div id="tourItem_innerCont">
                        <h2 id='tourItem_title' className={"sectionTitle"}>4th of july Love</h2>
                        <div id="tourItem_infoCont">
                            <div className={"infoItem_Cont"}>
                                <h3>Stops</h3>
                            </div>
                            <div className={"infoItem_Cont"}>
                                <h3>Stops</h3>
                            </div>
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

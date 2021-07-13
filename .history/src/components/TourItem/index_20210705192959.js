import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors} from '../../utills/fonts'
const TourItem = styled.div`
height:98vh;
display: flex;
justify-content: center;
align-items: center;
overflow:hidden;
#tourItem_Container{
    height:100%;
    background:${colors.darkBkg};
    width:96%;
    position: relative;
    top:3.7em;
    border:solid white 1px;
    border-bottom: none;
    color:white;
    border-radius: .5em .5em 0 0 ;
    overflow-y: scroll;
#headlineImgCont{
    height:30vh;
    background:lightslategray;
}

#tourItem_title{
    margin-top:1em;
}
#tourItem_innerCont{
    height: 85%;
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
                    <h2 id='tourItem_title' className={"sectionTitle"}>4th of july Love</h2>
                    <div id="tourItem_innerCont">

                    </div>
                </div>
                
            </TourItem>
        )
    }
}
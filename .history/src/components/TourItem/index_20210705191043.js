import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors} from '../../utills/fonts'
const TourItem = styled.div`
height:90vh;
display: flex;
justify-content: center;
align-items: center;
#tourItem_Container{
    height:98vh;
    background:${colors.darkBkg};
    width:96%;
    position: relative;
    top:2.6em;
    border:solid white 1px;
    border-bottom: none;
    color:white;
    border-radius: .5em .5em 0 0 ;

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
                    <div id="headline"></div>
                <h2 className={"sectionTitle"}>4th of july Love</h2>
                </div>
                
            </TourItem>
        )
    }
}

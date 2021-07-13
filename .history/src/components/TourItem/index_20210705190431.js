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
    height:100%;
    background:${colors.darkBkg};
    width:96%;
    position: relative;
    top:4.6em;
    border:solid white 1px;
    border-bottom: none;

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
                <h2>4th </h2>
                </div>
                
            </TourItem>
        )
    }
}

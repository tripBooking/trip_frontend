import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {} from '../'
const TourItem = styled.div`
height:90vh;
display: flex;
justify-content: center;
align-items: center;
#tourItem_Container{
    height:95vh;
    background:red;
    width:96%;
    position: relative;
    top:3em
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

                </div>
                
            </TourItem>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 
const TourItem = styled.div`
height:90vh;
display: flex;
justify-content: center;
align-items: center;
#tourItem_Container{
    height:vh;
    background:red;
    width:60%;
    position: relative;
    top:1em
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

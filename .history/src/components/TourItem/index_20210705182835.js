import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 
const TourItem = styled.div`
height:91vh;

`
export default class Tour_Item extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <TourItem>
                
            </TourItem>
        )
    }
}
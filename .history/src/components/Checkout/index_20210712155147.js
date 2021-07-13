import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Checkout = styled.div`
color:white;

`
export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        console.log({welcome:this.props})
}

    render() {
        return (
            <Checkout>
                <div id='checkout_formContainer'>
                    
                </div>
            </Checkout>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'

const Checkout = styled.div`
color:white;
height:100%;
display:flex;
justify-content:center;
align-items:center;
#checkoutCard{
    border:solid white 1px;
    background: blue;
    height:10vh;
    width:100%;
}

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
                <div id='checkoutCard'>

                    <div id='checkout_formContainer'>
                        <Form />
                    </div>

                </div>
              
            </Checkout>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'

const Checkout = styled.div`
color:white;
height:90vh;
display:flex;
justify-content: center;
align-items: center;
border:solid 1px white;
#checkoutCard{
    /* border:solid white 1px; */
    height:40vh;
    width:80%;
    position: relative;
    bottom:5em;
    padding-top:.6em;
    #checkout_formContainer{
        #signup_dataItemCont{
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            .signup_inputCont{
                flex: 1 0  100%;
                margin-bottom:.8em;
                .signup_inputClass{
                    width:100%;
                }
            }
            #container_cardNum{
                flex: 1 0 50%;
                border:solid red 1px;
            }


        }
    }
}

`
export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        console.log({welcome:this.props})
    }
    formPrompts = [
        {
        q: "first Name",
        type: 'text',
        id: 'fname',
        },
        {
            q: 'last Name',
            type: 'text',
            id:'lname'
        },
        {
            q: 'Card Number',
            type: 'text',
            id:"cardNum"
        },
        {
            q: 'exp Date',
            type: 'text',
            id:'eDate'
        },
        {
            q: 'Pin',
            type: 'text',
            id:'pin'
        }

    ]
    render() {
        
        return (
            <Checkout>
                <div id='checkoutCard'>
                    <div id='checkout_formContainer'>
                        <Form
                            formPrompts={this.formPrompts}
                            dataItemCont={'signup_dataItemCont'}
                            containerClass={'signup_inputCont'}
                            formInputClass={'signup_inputClass'}
                            
                        
                        />
                    </div>
                </div>
              
            </Checkout>
        )
    }
}

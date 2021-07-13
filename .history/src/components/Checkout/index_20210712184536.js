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
        #checkout_dataItemCont{
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            .checkout_inputCont{
                /* flex: 1 0  100%; */
                margin-bottom:2em;
                .checkout_inputClass{
                    width:100%;
                    font-size: 1.3em;
                    padding:.1em;
                    outline:none;
                    background:none;
                    border:none;
                    border-bottom: white solid .1em;
                    text-align:center;
                    color:white;
                 




                }
            }
            #container_cardNum{
                flex: 1 0 60%;
                input{
                    width:96%
                }
            }
            #container_eDate{
                flex: 1 0 35%;
            }
            #container_fname{
                flex: 1 0 100%;
            }
            #container_lname{
                flex: 1 0 100%;
            }
            #container_pin{
                flex: 1 0 100%;
                input{
                    width:30%;
                }
            }


        }
        #checkout_submitBtn{
            width:69%;
            font-size: 1.4em;
            padding: 5% 0;
            border-radius: .4em;
        }
         #checkout_submitBtnCont{
             display:flex;
             justify-content: center;
             margin-top:10%
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
                            dataItemCont={'checkout_dataItemCont'}
                            containerClass={'checkout_inputCont'}
                            formInputClass={'checkout_inputClass'}
                            btnId={"checkout_submitBtn"}
                            btnCont={"checkout_submitBtnCont"}
                            
                        
                        />
                    </div>
                </div>
              
            </Checkout>
        )
    }
}

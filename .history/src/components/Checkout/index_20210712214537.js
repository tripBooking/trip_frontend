import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'
import {colors,fonts} from '../../utills/fonts'
import * as yup from 'yup'
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
                    font-family:${fonts.regular.family};
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
            font-family:${fonts.bold.family};
            font-weight:${fonts.bold.weight};
            background: ${colors.orange};
            color:white;
        }
         #checkout_submitBtnCont{
             display:flex;
             justify-content: center;
             margin-top:10%
         }
    }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    #checkoutCard{
        width:60%;
        #checkout_formContainer{
             #checkout_dataItemCont{
                 font-size: 1.6em;
             }
            #checkout_submitBtn{
                width:50%;
            }
        }
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {  }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
        #checkoutCard{
        width:60%;

        #checkout_formContainer{
            #checkout_submitBtn{
                width:50%;
            }
        }
    }
  }


// for 4k
@media (min-width: 2000px) {  }

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
        const nameRegex = /^[a-zA-z]+$/
        const numberRegEx = /^([0-9-/])+$/
        const dateRegEx = /^[0-9]+\/+[0-9]+/
        const scheme = yup.object().shape({
            fname: yup.string().required('Name on card is required').matches(nameRegex,'must only contain letters').min(3),
            lname: yup.string().required('Name on card is required').matches(nameRegex, 'must only contain letters'),
            cardNum: yup.string().required('Card numbers required').matches(numberRegEx, 'must only contain numbers').length(16),
            eDate: yup.string().required('Experation date required').matches(dateRegEx, 'Must match this pattern ex.  02/02').length(5, "Must match this pattern ex. 01/01"),
            pin: yup.string().required('Card pin located on the back of the card is required').matches(numberRegEx, 'must only contain numbers').min(4),
            
            
        })
        
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
                            scheme={scheme}
                            
                        
                        />
                    </div>
                </div>
              
            </Checkout>
        )
    }
}

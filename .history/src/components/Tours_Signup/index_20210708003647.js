import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'
import {fonts,colors} from '../../utills/fonts'
import * as yup from 'yup'

const ToursSignup = styled.div`
color:white;

#toursSignup_title{
    text-align:center;
    font-family : ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    font-size: 2.5em;
    margin-top: 1em;
    margin-bottom:.5em;
}

#signup_dataItemContainer{
    .signup_dataItem{
         position: relative;
        width:52%;
        font-size: 1em;

    }
    #signup_dateContainer{
        display:flex;
        align-items: baseline;
       
        h3{
            margin-right:4%;
        }
    }
    #signup_startContainer{
        position: absolute;
        /* border:solid white 1px; */
        width:30%;
        left:67%;
        top:6.2em;
        text-align: center;
    }
    #signup_costContainer{
        display:flex;
        align-items: baseline;
        margin-top:.6em;
         h3{
            margin-right:4%;
        }
    }
    

}

#signup_formContainer{
    margin-top:1em;
    padding:1em 0 ;
     width:80%;
        margin:0 auto;
    /* background:yellow; */
    .tourSignup_input{
       
        background: none;
        border:none;
        border-bottom:white .2em solid;
        font-size:1.2em;
        outline:none;
        margin-top:.6em;
        color:white;
        text-align:center;
        padding-bottom:.6em;
        ::placeholder{
            color:whitesmoke
        
        }
    }

}


`

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    stateData = this.props.location.state

    componentDidMount() {
        console.log({stateData :this.stateData})
    }
    render() {
        const submitData = (e) => {
            e.preventDefault()
            console.log('yesss')
        }
        const prompts = [
            {
                q: "First Name",
                type: 'text',
                id: 'fname',
                limit:15
            },
            {
                q: "Last Name",
                type: 'text',
                id: 'lname',
                limit:15
            },

            {
                q: 'Email',
                type: 'email',
                id: "email",
                limit:15
            },

            {
                q: "Mobile Number",
                type: "phone",
                id: "mPhone",
                limit:10,
            },

        ]
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        const scheme  = yup.object().shape({
            fname: yup.string().required("first name is required").min(3),
            // lname: yup.string().required(),
            // email: yup.string().email('Invalid Email').required('A email is required'),
            // mPhone: yup.string().matches(phoneRegExp,'Phone number not Valid').required('A phone number is required')
      
    })


        
        const {cost,date,start,title} = this.stateData
        return (
            <ToursSignup>
                <h1 id='toursSignup_title'>Book Your Spot </h1>
                <div id="signup_dataItemContainer">

                    <div id="signup_dateContainer" className={"signup_dataItem"}>
                        <h3>Date</h3>
                        <h4>{ date}</h4>
                    </div>

                    <div  id='signup_startContainer' className={"signup_dataItem"}>
                        <h3>Start</h3>
                        <h4>{start}</h4>
                    </div>
                 
                    <div id='signup_costContainer' className={"signup_dataItem"}>
                        <h3>Cost</h3>
                        <h4>{ cost}</h4>
                    </div>
                
                </div>
                
                <div id="signup_formContainer">
                    <Form
                        containerClass={'tourSignup_itemCont'}
                        formInputClass={'tourSignup_input'}
                        scheme ={scheme}

                        formPrompts={prompts}
                    />
                </div>
     
            
            </ToursSignup>
        )
    }
}

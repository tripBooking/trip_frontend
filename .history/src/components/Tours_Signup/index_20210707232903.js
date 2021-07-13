import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'
import {fonts,colors} from '../../utills/fonts'
const ToursSignup = styled.div`
color:white;
.tourSignup_itemCont{
    background:blue;
}
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
    border:solid whtie 1px;
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
                    <Form containerClass={'tourSignup_itemCont'} />
                </div>
     
            
            </ToursSignup>
        )
    }
}

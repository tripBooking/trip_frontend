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
}

#signup_dataItemContainer{
    #signup_dateContainer{
        display:flex;
        align-items: center;
        border:solid 1px white;
        width:48%;
        font-size: .9em;
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

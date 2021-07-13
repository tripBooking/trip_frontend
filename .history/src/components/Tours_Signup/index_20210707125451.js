import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ToursSignup = styled.div`
color:white;

`

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    stateData = this.props.location

    componentDidMount() {
        console.log({stateData :this.stateData})
    }
    render() {
        const submitData = (e) => {
            e.preventDefault()
        }
        return (
            <ToursSignup>
                <h1>Book Your Spot Today</h1>
                <div id="signup_dataItemContainer">
                    <div id="signup_dateContainer" className={"signup_dataItem"}>
                        <h3>Date</h3>
                        <h4>June 19 2020</h4>
                    </div>

                    <div  id='signup_startContainer' className={"signup_dataItem"}>
                        <h3>Start</h3>
                        <h4>12:00 pm</h4>
                    </div>

                    <div id='signup_costContainer' className={"signup_dataItem"}>
                        <h3>Cost</h3>
                        <h4>45</h4>
                    </div>
                </div>
                <main>
                    <form onSubmit={submitData}>
                        
                    </form>
                <div>
                    <button>Complete</button>
                </div>
                </main>
            </ToursSignup>
        )
    }
}

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
                <h1>Book Your Spot Today</h1>
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
                <main>
                    <form onSubmit={submitData}>
                        <div>
                            <label>First Name</label>
                            <input name='first_name' type='text' />
                        </div>
                        
                        <div>
                            <label> LastName</label>
                            <input name='last_name' type='text' />
                        </div>
                        
                        <div>
                            <label>Email</label>
                            <input name='email' type='email' />
                        </div>
                        
                    </form>
                <div>
                    <button>Complete</button>
                </div>
                </main>
            </ToursSignup>
        )
    }
}

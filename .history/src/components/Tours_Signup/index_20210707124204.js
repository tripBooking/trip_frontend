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

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const submitData = (e) => {
            e.preventDefault()
        }
        return (
            <ToursSignup>
                <h1>Book Your Spot Today</h1>
                <div id="signup_dataItems">
                    <div>
                        <h3>Date</h3>
                        <h4>June 19 2020</h4>
                    </div>

                    <div>
                        <h3>Start</h3>
                        <h4>12:00 pm</h4>
                    </div>

                    <div>
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

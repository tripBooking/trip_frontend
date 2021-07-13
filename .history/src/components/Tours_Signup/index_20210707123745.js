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
        return (
            <ToursSignup>
                <h1>Book Your Spot Today</h1>
                <div id="signup_dataItems">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <main>

                </main>
                <div>
                    <button>Complete</button>
                </div>
            </ToursSignup>
        )
    }
}

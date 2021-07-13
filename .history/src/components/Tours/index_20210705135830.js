import React, { Component, useContext } from 'react'
import context from '../../utills'
import PropTypes from 'prop-types'

export default class ToursContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const contextData = useContext()
        return (
            <div>
                
            </div>
        )
    }
}

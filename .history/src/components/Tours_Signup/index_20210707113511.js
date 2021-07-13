import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

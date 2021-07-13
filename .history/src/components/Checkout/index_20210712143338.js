import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        console.log({welcome:this.props})
}

    render() {
        return (
            <div>
                welocem tja
            </div>
        )
    }
}

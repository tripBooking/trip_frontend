import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'

export default function ToursPage() {
    const context = useContext(contextData)
    const {tours} = context
    console.log(context.tours)
    return (
        <div>

            
        </div>
    )
}

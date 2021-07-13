import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'
import TourChoice from './tourChoice'
export default function ToursPage() {
    const context = useContext(contextData)
    const {tours} = context
    console.log({tours})
    return (
        <div>
            {tours.map(i=><)}
            
        </div>
    )
}

import React from 'react'
import {colors } from '../../../utills/fonts'
import styled from 'styled-components'

const ChoiceItem = styled.div`
background-color: ${colors.darkBkg};

`
export default function Choice_Item(props) {
    const { data } = props
    console.log({data})
    return (
        <ChoiceItem>
            
        </ChoiceItem>
    )
}

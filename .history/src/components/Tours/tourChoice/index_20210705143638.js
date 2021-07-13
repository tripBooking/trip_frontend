import React from 'react'
import {colors } from '../../../utills/fonts'
import styled from 'styled-components'

const ChoiceItem = styled.div`
background-color: ${colors.darkBkg};
color:white;
margin-bottom: 3em;




`
export default function Choice_Item(props) {
    const { data } = props
    console.log({data})
    return (
        <ChoiceItem>
            <h2>{ data.title}</h2>
            
        </ChoiceItem>
    )
}

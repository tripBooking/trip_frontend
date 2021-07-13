import React from 'react'
import {colors } from '../../../utills/fonts'
import styled from 'styled-components'

const ChoiceItem = styled.div`
background-color: ${colors.darkBkg};
color:white;
min-height: 20vh;
margin-bottom: .7em;
border:solid white 1px;
display: flex;
flex-direction:column;
/* justify-content:space-around; */
align-items:center;


`
export default function Choice_Item(props) {
    const { data } = props
    console.log({data})
    return (
        <ChoiceItem>
            <h2>{ data.title}</h2>
            <p> {data.details}</p>
            <div className={'choices'}>
                <h4>Show More</h4>
                <h4>Signup</h4>
            </div>
        </ChoiceItem>
    )
}

import React from 'react'
import {colors,fonts } from '../../../utills/fonts'
import styled from 'styled-components'


export default function Choice_Item(props) {
    const { data } = props
    return (
        <ChoiceItem>
            <h2 className={'choiceItem_title'}>{ data.title}</h2>
            <p className={'choiceItem_details'}> {data.details}</p>
            <div className={'choicesBtnCont'}>
                <h4 id='choicesShowMore' className={"moreTxt choicesMoreTxt"}>Show More</h4>
                <h4 id='choicesSignup' className={"moreTxt choicesMoreTxt"}>Signup</h4>
            </div>
        </ChoiceItem>
    )
}

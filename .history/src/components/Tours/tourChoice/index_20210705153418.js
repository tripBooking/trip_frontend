import React from 'react'
import {colors,fonts } from '../../../utills/fonts'
import styled from 'styled-components'

const ChoiceItem = styled.div`
background-color: ${colors.darkBkg};
color:white;
min-height: 20vh;
margin-bottom: .7em;
padding-top:.5em;
border:solid white 1px;
display: flex;
flex-direction:column;
/* justify-content:space-around; */
align-items:center;
.choicesBtnCont{
    margin-top: auto;
    margin-left:auto;
    display:flex;
    .choicesMoreTxt{
        margin-right:.6em
    }
    #choicesShowMore{
        margin-right:1em
    }
}
.choiceItem_details{
 font-family: ${fonts.regular.family} ;
 font-weight: ${fonts.regular.weight};
 width:90%;
 text-align: center;
 margin-top:.6em;
 font-size:1.3em;
 line-height:.87em;
}
.choiceItem_title{
    font-family: ${fonts.bold.family}

}

`
export default function Choice_Item(props) {
    const { data } = props
    console.log({data})
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

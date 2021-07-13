import React from 'react'
import {colors,fonts } from '../../../utills/fonts'
import styled from 'styled-components'


export default function Choice_Item(props) {
    const { data,push } = props
    const ChoiceItem = styled.div`
background-color: ${colors.darkBkg};
background-image:${data.headlinePhoto ? ` url(${data.headlinePhoto}) ` : null};
background-blend-mode: darken;

background-size:cover;
color:white;
height: 20vh;
margin: 1em 0; 
padding-top:.5em;
border:solid white 1px;

display: flex;
flex-direction:column;
/* justify-content:space-around; */
align-items:center;
.choicesBtnCont{
    margin-top: auto;
    display:flex;
    background: ${colors.darkBkg};
    width:100%;
    height:20%;
    justify-content: flex-end;
    align-items:center;
    .choicesMoreTxt{
        margin-right:.6em

    }
    #choicesSignup{
        margin-left:4em

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
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    height:30vh;
    
    .choicesBtnCont{
        height:3em;
         .choicesMoreTxt{
        margin-right:.6em

    }
    }
  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {  }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  }


// for 4k
@media (min-width: 2000px) {  }

    `
    return (
        <ChoiceItem>

            <h2 className={'choiceItem_title'}>{ data.title}</h2>
            <p className={'choiceItem_details'}> {data.details}</p>
            <div className={'choicesBtnCont'}>
                <h4
                    id='choicesShowMore'
                    className={"moreTxt choicesMoreTxt"}
                    onClick={()=>push(`/tours/${data.id}`)}
                >Show More</h4>
                <h4 
                    id='choicesSignup'
                    className={"moreTxt choicesMoreTxt"}
                    onClick={()=>push(`/tours/${data.id}/signup`)}

                >Signup</h4>
            </div>
        </ChoiceItem>
    )
}

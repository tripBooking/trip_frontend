import React from 'react'
import styled from 'styled-components'
import {fonts,colors} from "../../../utills/fonts"

export default function RecentItem(props) {
     const { data } = props
    const month = new Date().getMonth()
    const day = new Date().getDate()
    const titleLength = data.title.length

const Item = styled.div`
background:rgba(0,0,0,.6);
margin-top:2em;
padding:1em 0;
/* border:solid white 1px; */
.recentsHeader{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .thumbContainer{
            background-color:white;
            height:8em;
            width:100%;
            margin-top:3%;
        }
        .recentsTitle{
            text-align:${titleLength < 20 ? 'center' : 'left'};
            font-size: ${titleLength < 20 ? '1.5em' : "1.3em"};
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};
            margin-top:.3em;
        }
    }

 .recentsMoreTxt{
            margin-top:.8em;
        }
.recentsDate{
    text-align: right;
    font-family: ${fonts.hair.family};
    font-weight: ${fonts.hair.weight} + 100

}
   
`
   


    return (
        <Item>
            <div className={'recentsHeader'}>
                <div className={"thumbContainer"}>
                {/* <img className={'recentsThumbnail'} src={data.url} alt='thumbnail'/> */}
                </div>
                <h4 className={'recentsTitle'}>{ data.title}</h4>
            </div>


            <h3 className={'recentsDate bolded'}>
               {data.date || `${month}/${day}`}
            </h3>
            <p></p>
            <h4 className={'moreTxt recentsMoreTxt'}>Show More</h4>
        </Item>
    )
}

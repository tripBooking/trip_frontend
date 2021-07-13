import React from 'react'
import styled from 'styled-components'
import {fonts,colors} from "../../../utills/fonts"

export default function RecentItem(props) {
     const { data } = props
    const month = new Date().getMonth()
    const day = new Date().getDate()
    const titleLength = data.title.length
    let detailsLength
    if (data.details) {
        detailsLength = data.details.length
        console.log({detailsLength})
    }


const Item = styled.div`
background:rgba(0,0,0,.8);
margin-top:1em;
padding:1em 0;
min-height: 16em;
.recentsHeader{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .thumbContainer{
            background-color:lightslategray;
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
            word-spacing:.1em;
    letter-spacing: .07em;
        }
}
.recentsDate{
    text-align: right;
    font-family: ${fonts.hair.family};
    font-weight: ${fonts.hair.weight} + 100;
    margin-right:.6em;
    font-size:1.07em;
    margin-top:.8em;


}
.recentsMoreTxt{
            margin-top:.8em;
}
.recentsDetail{
display:${detailsLength <= 58 ? 'initial':'none'};
 font-family: ${fonts.hair.family};
 font-family: ${fonts.hair.weight};
    word-spacing:.5em;
    letter-spacing: .08em;

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


            <p className={'recentsDetail'}> {data.details} </p>


            <h4 className={'moreTxt recentsMoreTxt'}>Show More</h4>
        </Item>
    )
}

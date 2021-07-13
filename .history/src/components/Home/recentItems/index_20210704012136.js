import React from 'react'
import styled from 'styled-components'
import {fonts,colors} from "../../../utills/fonts"
const Item = styled.div`
background:black;
margin-top:2em;
border:solid white 1px;
.recentsHeader{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .thumbContainer{
        background-color:white;
        height:3em;
    }
}
`
export default function RecentItem(props) {
    const { data } = props
    const month = new Date().getMonth()
    const day = new Date().getDate()
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
            <h4 className='moreTxt '>Show More</h4>
        </Item>
    )
}

import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
.recentsHeader{
    text-align: center;
    display: flex;
    flex-direction: column;
}
`
export default function RecentItem(props) {
    const { data } = props
    const month = new Date().getMonth()
    const day = new Date().getDate()
    return (
        <Item>
            <div className={'recentsHeader'}>
                <img className={'recentsThumbnail'} src={data.url} alt='thumbnail'/>
                <h4 className={'recentsTitle'}>{ data.title}</h4>
            </div>


            <h3 className={'recentsDate'}>
                { day}/{month}
            </h3>
            <p></p>
            <h4>Show More</h4>
        </Item>
    )
}

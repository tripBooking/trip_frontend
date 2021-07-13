import React from 'react'
import styled from 'styled-components'

const Item = styled.div`

`
export default function RecentItem(props) {
    const { data } = props
    const month = new Date().getMonth()
    const month = new Date().getMonth()
    return (
        <Item>
            <div className={'recentsHeader'}>
                <div className={'recentsThumbnail'} ></div>
                <h4 className={'recentsTitle'}>{ data.title}</h4>
            </div>
            <h3 className={'recentsDate'}>{ data.date}</h3>
            <p></p>
            <button></button>
        </Item>
    )
}

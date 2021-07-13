import React from 'react'
import styled from 'styled-components'

const Item = styled.div`

`
export default function RecentItem(props) {
    const {data} = props
    return (
        <Item>
            <div className={'recentsHeader'}>
                <div className={'recentsThumbnail'} ></div>
                <h4 className={'recentsTitle'}>{ data.title}</h4>
            </div>
            <h3 className={'recentsDate'}>{ this.props.date}</h3>
            <p></p>
            <button></button>
        </Item>
    )
}

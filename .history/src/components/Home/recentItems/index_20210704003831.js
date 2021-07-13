import React from 'react'
import styled from 'styled-components'

const Item = styled.div`

`
export default function RecentItem(props) {
    const {data} = props
    return (
        <Item>
            <div>
                <div></div>
                <h4>{ data.title}</h4>
            </div>
        </Item>
    )
}

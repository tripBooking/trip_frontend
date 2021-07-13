import React from 'react'
import styled from 'styled-components'

const Item = styled.div`

`
export default function RecentItem(props) {
    const {data} = props
    return (
        <Item>
            <h3>{ data.title}</h3>
            
        </Item>
    )
}

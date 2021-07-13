import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'
import TourChoice from './tourChoice'

/*================== Styled =================*/
const ToursPage = styled.div`
margin-top:5vh;
color:white;
height:87vh;
;
`
/*---------------------------------------------*/


export default function Tours_Page() {
    const context = useContext(contextData)
    const {tours} = context
    console.log({tours})
    return (
        <ToursPage>
            <h1>Tours</h1>
            {/* {tours.map(i=><TourChoice data={i} />)} */}
        </ToursPage>
    )
}

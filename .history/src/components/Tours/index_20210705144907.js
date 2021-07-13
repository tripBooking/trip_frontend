import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'
import TourChoice from './tourChoice'

/*================== Styled =================*/
const ToursPage = styled.div`
margin-top:2vh;
color:white;
height:9vh;
overflow-y:hidden;
#tourContainer{
    overflow-y:scroll;
    height:73vh
    
}
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
            <div id='tourContainer'>

                {tours.map(i=><TourChoice data={i} />)}
            </div>
                
        </ToursPage>
    )
}

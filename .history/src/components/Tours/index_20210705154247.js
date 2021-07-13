import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'
import TourChoice from './tourChoice'

/*================== Styled =================*/
const ToursPage = styled.div`
/* margin-top:2vh; */
color:white;
height:100vh;
overflow-y:hidden;
#tourContainer{
    overflow-y:scroll;
    height:100%;
    padding-bottom:20vh;
}
#toursTitle{
    /* margin-bottom: 2em; */
    border-bottom: white solid .2em;
}
;
`
/*---------------------------------------------*/


export default function Tours_Page(props) {
    const context = useContext(contextData)
    const { tours } = context
    const {}
    console.log({tours})
    return (
        <ToursPage>
            <h1 id='toursTitle' className={'sectionTitle'}>Tours</h1>
            <div id='tourContainer'>

                {tours.map(i=><TourChoice data={i} />)}
            </div>
                
        </ToursPage>
    )
}

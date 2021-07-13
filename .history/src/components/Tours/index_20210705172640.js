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
};

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    #tourContainer{
        display :flex;
        flex-wrap: wrap;
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  }


// for 4k
@media (min-width: 2000px) {  }
`
/*---------------------------------------------*/


export default function Tours_Page(props) {
    const context = useContext(contextData)
    const { tours } = context
    const { history } = props
    const {push} = history
    console.log({tours})
    return (
        <ToursPage>
            <h1 id='toursTitle' className={'sectionTitle'}>Tours</h1>
            <div id='tourContainer'>

                {tours.map(i=><TourChoice data={i} push={push} />)}
            </div>
                
        </ToursPage>
    )
}

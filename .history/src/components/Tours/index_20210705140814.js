import React, { useContext } from 'react'
import contextData from '../../utills/context'
import styled from 'styled-components'
import TourChoice from './tourChoice'

/*================== Styled =================*/
const 
/*---------------------------------------------*/


export default function Tours() {
    const context = useContext(contextData)
    const {tours} = context
    console.log({tours})
    return (
        <div>
            {tours.map(i=><TourChoice data={i} />)}
            
        </div>
    )
}

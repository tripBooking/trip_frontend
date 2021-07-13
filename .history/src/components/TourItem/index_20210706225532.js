import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'

/*================== Stylings   =================*/
const TourItem = styled.div`
overflow-y: scroll;
color:white;
#tourItem_header{
    height:30vh;
    background:gray;
}
#tourItem_title{
color:white;
    font-size:2em;
    position: relative;
    bottom:2.2em;
    font-family: ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};

}
#tourItem_main{
    //b
    .tourItem_dataContainer{
        /**=======================
         *    class dataContainer ✔️
                            dateContainer 
                            priceContainer
                            timeContainer
                            goingContainer
                            openContainer
         *========================**/
        display: flex;
        align-items:baseline;
        font-family: ${fonts.compressed.family};
        font-weight: ${fonts.compressed.weight};
        h3{
            font-size: 1.6em;
            margin-right:1em;
        }
        h4{
            font-size: 1.5em;
        }
    }
    #tourItem_staticInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        #tourItem_dateContainer{
            flex-direction: column;
            align-items: center;
        }
    }



}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 
    #tourItem_header{
    
}
#tourItem_title{

}
#tourItem_main{

}
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    #tourItem_header{
    
}
#tourItem_title{

}
#tourItem_main{

}
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    #tourItem_header{
    
}
#tourItem_title{

}
#tourItem_main{

}
}

// for 4k
@media (min-width: 2000px) {
#tourItem_header{
    
}
#tourItem_title{

}
#tourItem_main{

}
  }

`
/*=============================================*/

export default class Tour_Item extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {

        /*================== Data constants =================*/
        const stops =    [
            'eastern blvd ',
            'western Heights',
            'lilly st',
            "Mlk blvd",
            "dance ave"
        ]
        let about ="Ride with us a we travel the seas of the city we will be going to some of the most beautiful areas of the city, we will see the eastern river followed by the lights of beautiful downtown there is so much to see come along with us.  "
        let cost = 35
        let fees = 12
        let going = 5
        let opening = 4

        /*=============================================*/
        
        
        return (
            <TourItem>
                <header id="tourItem_header"></header>
                <h1 id='tourItem_title'>Fourth of July firework Party</h1>
                <main id='tourItem_main'>
                   {/* { //* Static Information.... Date and tme } */}
                    <div id='tourItem_staticInfo'>
                        <div className={'tourItem_dataContainer'}  id='tourItem_priceContainer'>
                            <h3>Price</h3>
                            <h4>{ cost}</h4>

                        </div>

                        {     /*========================*/}
                        
                        <div id='tourItem_dateContainer'  className={'tourItem_dataContainer'} >
                               {/* <h3>Date</h3> */}
                            <h4>January 3 2021</h4>
                        </div>

                    </div> 
                   {     /*========================*/}

               
               
                </main>
               
            </TourItem>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'

/*================== Styled  =================*/
const TourItem = styled.div`
overflow-y: scroll;
#tourItem_header{
    height:30vh;
    background:gray;
}
#tourItem_title{

}
#tourItem_main{

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

        return (
 
            <TourItem>
                <header id="tourItem_header"></header>
                <title id='tourItem_title'>Fourth of July firework Party</title>
                <main id='tourItem_main'></main>
               
            </TourItem>
        )
    }
}

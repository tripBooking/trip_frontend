import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'

/*================== Stylings   =================*/
const TourItem = styled.div`
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
overflow-y: scroll;

padding:0 .6em;
padding-bottom:2em;
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
            margin-right:.6em;
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

    #tourItem_aboutInfo{
            background-color: ${colors.darkBkg};
            border-radius: .4em;
            min-height:25vh;

        margin-top:2em;
        h2{
            text-align:left;
            margin-bottom:.5em;
        }
        p{
            font-size:1.3em;
            font-family:${fonts.regular.family};
            line-height: 2em;
            text-align:center;
        }
    }

   #tourItem_stopInfo{
       margin-top:3em;
       /* width:80%; */
        ol {
    display: -ms-flexbox;           /* IE 10 */
    display: -webkit-flex;          /* Safari 6.1+. iOS 7.1+ */
    display: flex;
    -webkit-flex-flow: wrap column; /* Safari 6.1+ */
    flex-flow: wrap column;
    max-height: 30vh;
    font-size:1.3em;
    li{
        list-style: none;
        font-family:${fonts.hair.family};
        font-weight: ${fonts.hair.weight};
        margin-bottom: .4em;
    }
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


                    {/* { //* About Information... Tour Details } */}

                    <div id='tourItem_aboutInfo'>
                        <h2 className={'sectionTitle'} >Details</h2>
                        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.
                            <br/>
                            <br/>
                            
                            Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.
                            <br />
                            <br />
                            Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz</p>
                    </div>
                    {     /*========================*/}

                    {/* { //* Stops Information... list of stops } */}
                    <div id='tourItem_stopInfo'>
                        <ol>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                            <li>Starbucks</li>
                        
                        </ol>
                    </div>
                        

                    {     /*========================*/}

                    
               
               
                </main>
               
            </TourItem>
        )
    }
}

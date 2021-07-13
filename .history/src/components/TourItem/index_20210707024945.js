import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'

/*================== Stylings   =================*/
const TourItem = styled.div`
color:white;
padding-bottom:3em;

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
            font-family:${fonts.hair.family}
        }
        #tourItem_priceContainer{
            font-family:${fonts.hair.family}

            
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
       background:${colors.darkBkg};
       padding:.7em 0;
       h2{
           margin-bottom: .8em;
       }
       /* width:80%; */
        ol {
    display: -ms-flexbox;           /* IE 10 */
    display: -webkit-flex;          /* Safari 6.1+. iOS 7.1+ */
    display: flex;
    -webkit-flex-flow: wrap column; /* Safari 6.1+ */
    flex-flow: wrap column;
    max-height: 15vh;
    font-size:1.2em;
    justify-content:center;
    li{
        /* list-style: none; */
        font-family:${fonts.compressed.family};
        font-weight: ${fonts.compressed.weight};
        margin-bottom: .4em;
    }
  }
   }

   #tourItem_submitInfo{
        margin:1em auto;
        height:13vh;
        /* background:white; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        .submitDataCont{
            justify-content: space-between;
            margin-top:1em;
        }

        button{
            background:${colors.orange};
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};
            position:relative;
            right:.2em;
            top:.3em;
            outline:none;
            color:white;
            border:solid white 1px;
            border-radius: .4em;
            font-size:1.2em;
            padding:.6em;
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
    #tourItem_stopInfo{
        ol{
            margin:0 auto;
            width:88%;
            /* padding-left: 15%; */
            
            li{
                font-size: 1.5em;
            }
        }
    }
     #tourItem_submitInfo{
         #tourItem_submitInnerCont{
             display:flex;
             justify-content: space-between;
             width:50%;
         }
         width:70%;
         button{
             font-size:1.6em;
         }
     }

}
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {


    #tourItem_header{
    
}
#tourItem_title{

}
#tourItem_main{
    #tourItem_staticInfo{
        position: relative;
        flex-direction: column;
        text-align: center;
        align-items: flex-end;
        width:17%;
        border:solid white 1px;
        margin-left:auto;
        
        #tourItem_dateContainer{
            margin-top:.5em;
        }
    }
    #tourItem_aboutInfo{
        width:70%;
        position: relative;
        left:12%;
        bottom:10%;
    }
    #tourItem_stopInfo{
        width:15%;
        margin-left: auto;
        position: relative;
        bottom:100vh;
        ol{
            height:100vh;
            display:initial;
            li{
                font-size:1.1em;
                text-align:right;
                list-style: none;
            }
        }
    }

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
    
        let about ="Ride with us a we travel the seas of the city we will be going to some of the most beautiful areas of the city, we will see the eastern river followed by the lights of beautiful downtown there is so much to see come along with us.  "
        let cost = '35.00 usd'
        let fees = 12
        let going = 5
        let opening = 4
        let stops = ['starbucks' ,"The River","The Moutains","Great Escape ","La La land",'Never Ever Land']

        /*=============================================*/
        
        
        return (
            <TourItem>
                <header id="tourItem_header"></header>
                <h1 id='tourItem_title'>Fourth of July firework Party</h1>
                <main id='tourItem_main'>
                   {/* { //* Static Information.... Date and tme } */}
                    <div id='tourItem_staticInfo'>
                        <div className={'tourItem_dataContainer'}  id='tourItem_priceContainer'>
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
                        <h2 className={'sectionTitle'}>Stops</h2>
                        <ol>
                            {stops.map(i => <li>{ i}</li>)}
                        </ol>
                    </div>
                    {     /*========================*/}

                    {/* { //*Submition Information} */}
                    <div id="tourItem_submitInfo">
                        <div id='tourItem_submitInnerCont'>
                            <div className={"tourItem_dataContainer submitDataCont"}>
                                <h3>Going</h3>
                                <h4>{ going}</h4>
                            </div>
                            <div id='vertDivider'></div>
                            <div className={"tourItem_dataContainer submitDataCont"}>
                                <h3>Spots Left</h3>
                                <h4>{ opening}</h4>
                            </div>
                        </div>
                        <button>Book Your Spot</button>
                    </div>

                    {     /*========================*/}

 

                    
               
               
                </main>
               
            </TourItem>
        )
    }
}

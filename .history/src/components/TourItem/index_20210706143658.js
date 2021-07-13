import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'
const TourItem = styled.div`
height:96vh;
display: flex;
justify-content: center;
align-items: flex-start;
overflow-y:scroll;
margin-top:.4em;
#tourItem_Container{
    height:110vh;
    background:${colors.darkBkg};
    width:96%;
    position: relative;
    /* border:solid white 1px; */
    border-bottom: none;
    color:white;
    /* overflow-y: scroll; */
#bookBtn{
position:absolute;
top:21%;
left:69%;
font-size: 1.2em;
height: 2.5em;
z-index: 4;
width:8em;
background:${colors.orange};
color:white;
border:none;
border-radius:.3em;

    }
#headlineImgCont{
    height:30vh;
    background:lightslategray;
    border-radius: .5em .5em 0 0 ;
    display:flex;
    justify-content: center;
    align-items: center;
    #tourItem_title{
        margin-bottom: .5em;
        align-self: flex-end;
        }
    }

#tourItem_innerCont{
    /* height: 89%; */
    height:83vh;
    position: relative;
    bottom:1em;
    #tourItem_infoCont{
        border:solid white 1px;
        margin:0 auto;
        height:98%;
        overflow-y: scroll;
        margin-top:1em;
        padding:1em 0 ;
        #tourInfo_date{
            text-align: right;
            font-size: 1.5em;
            margin-right:.4em;
            font-family:${fonts.regular.family};
            font-weight:${fonts.regular.weight};
            color: ${colors.lightOrange};
            margin-bottom:1.5em;
            text-decoration: underline;
            text-decoration-color:rgba(255,255,255,.6);
        }
        .infoItem_Cont{
            min-height:35vh;
            margin-bottom:2em;
            padding:0 .2em;
            .infoItem_Title{
                font-family: ${fonts.compressed.family};
                font-weight: ${fonts.compressed.weight};
                font-size:1.8em;
            }
            .infoItem_innerCont{
                height:30vh;
                /* background:blue; */
                border:solid 1px white;
                width:94%;
                margin:0 auto;
                margin-top:.7em;
                border-radius: .6em;
                display:flex;
                /* flex-direction:column; */
                flex-wrap: wrap;
                align-content:flex-start;

                .infoItem_aboutItem{
                    font-size: 1.4em;
                    margin:0;
                    /* border:solid white 1px; */
                    /* height:1em; */
                    width:50%;
                    text-align: center;
                };
          
            }
            #infoItem_stopCont{
            height:fit-content;
            padding:1em .2em;
            }
         
        }
       #infoItem_stops{
           height: fit-content;
       }
    
       #infoItem_aboutCont{
           position: relative;
           bottom:15%;
            #infoItem_about{
           height:fit-content;
           border:none;
           p{
               font-size:1.5em;
               text-align: center;
           }
       }
       }
       #pricingContainer{
               position: relative;
               bottom:1em;
            #pricingInnerCont{
               border:none;
                
                        }
           .pricingItemCont{
               display:flex;
               align-items: center;
               justify-content:flex-start;
               width:100%;
               margin-bottom:.8em;
               h5{
                   font-size: 1.5em;
                   width:50%;
                   text-align: center;
               }
               h4{
                   margin-left:1em;
                   font-size: 1.6em;
                   width:50%;
                   justify-self:flex-end


               }
              
           }

       }
       #goingContainer{
           position:relative;
           bottom:25%;
       .goingItem{
           display:flex;
           width:100%;
           justify-content:center;
           align-items:baseline;
           h4{
               font-size:1.2em ;

           }
           h5{
               font-size:1.3em;
               margin-left:1em
           }
       }
       }
 
    }
   

    }
    
}


`
export default class Tour_Item extends Component {
    static propTypes = {
        prop: PropTypes
    }


    render() {
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
                <div id='tourItem_Container'>
                            {/* <button id="bookBtn">Book now</button> */}

                    <div id="headlineImgCont">
                        <h2 id='tourItem_title' className={"sectionTitle"}>4th of july Love</h2>

                    </div>
                    <div id="tourItem_innerCont">
                        <div id="tourItem_infoCont">
                           {     /**======================
                            *    Info items 
                            *========================**/}


                            <div id='tourInfo_date' >
                                july 3 20220
                            </div>

                            {//*------- stops container-------*/
                            }
                             <div id='infoItem_stops' className={"infoItem_Cont"}>
                                <h3 className={'infoItem_Title'}>Stops</h3>
                                <div id='infoItem_stopCont' className={'infoItem_innerCont'}>
                                       {stops.map(i => {
                                        return <div className={'infoItem_aboutItem bolded'}> {i} </div>
                                    })}
                                </div>
                            </div>
                           
                            {//*------- About container-------*/
                            }
                            <div id="infoItem_aboutCont" className={"infoItem_Cont"}>
                                <h3 className={'infoItem_Title'}>About</h3>
                                <div id='infoItem_about'  className={'infoItem_innerCont'}>
                                 <p> {about} </p>
                                </div>
                            </div>
                              
                            {//*------- Pricing container-------*/
                            }
                            <div id="pricingContainer" className={"infoItem_Cont"}>
                                {/* <h3 className={'infoItem_Title'}>Pricing</h3> */}
                                <div id='pricingInnerCont' className={'infoItem_innerCont'}>
                                    <div className={'pricingItemCont'} >
                                        <h5>Tour Pricing : </h5>
                                        <h4 className={"bolded"}> ${cost}.00 usd</h4>
                                    </div>

                                    <div className={'pricingItemCont'} >
                                        <h5>Fees : </h5>
                                        <h4 className={"bolded"} > ${fees}.00 usd</h4>
                                    </div>
                                </div>
                            </div>
                            
                            {//*------- Going container-------*/
                            }
                            <div id='goingContainer' className={"infoItem_Cont"}>
                                {/* <h3 className={'infoItem_Title'}>Going</h3> */}
                                <div id='goingInnerCont' className={'infoItem_innerCont'}>

                                    <div className={"goingItem"} >
                                        <h4>Going</h4>
                                        <h5> {going }</h5>
                                    </div>

                                    <div className={"goingItem"} >
                                        <h4>Openings</h4>
                                        <h5> {opening}</h5>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
            </TourItem>
        )
    }
}

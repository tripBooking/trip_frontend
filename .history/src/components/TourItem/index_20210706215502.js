import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
 import {colors,fonts} from '../../utills/fonts'

/*================== Styled  =================*/
const TourItem = styled.div`
height:96vh;


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    #tourItem_innerCont{
        
        #tourItem_infoCont{
            .infoItem_Cont{
                min-width: 0;
            }
            #tourInfo_date{
                position: relative;
                top:2.2em;
            }
            #infoItem_stopsCont{
                text-align:center;
                    border:none;
                    width:15%;
                #infoItem_stopInnerCont{
                    /* background:blue; */
                    border:none;
                    width:100%;
                    flex-direction:column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding:0;
                    margin:0;
                    .infoItem_aboutItem{
                        margin:0;
                        /* text-align:; */
                        width:100%;
                    }
                }

            }
            #infoItem_aboutCont{
                width:65%;
                text-align:center;
                margin:0;
                /* border:solid white 1px; */
                bottom:52.5%;
                margin: 0 auto;
                p{
                    text-align:left
                }
            }
            #pricingContainer{
                background:blue;
                width:40%;
                height: 20vh;
                border:solid white 1px;
                position: relative;
                bottom:11110vh;
                left:33vw;
            }

        }
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  }

// for 4k
@media (min-width: 2000px) {  }

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
               
            </TourItem>
        )
    }
}

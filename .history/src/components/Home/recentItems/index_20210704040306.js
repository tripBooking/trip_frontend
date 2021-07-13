import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from "../../../utills/fonts"
// import {SplitText} from 'gsap/SplitText'

export default function RecentItem(props) {
     const { data } = props
    const month = new Date().getMonth()
    const day = new Date().getDate()
    const titleLength = data.title.length
    let detailsLength
    if (data.details) {
        detailsLength = data.details.length
        console.log({detailsLength})
    }


const Item = styled.div`
background:rgba(0,0,0,.8);
padding:1em .4em;
min-height: 16em;
margin-bottom:1.3em;
border:solid white 1px;
.recentsHeader{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .thumbContainer{
            background-color:lightslategray;
            height:9em;
            width:100%;
            margin-top:.1em;
            margin-bottom:1em;
        }
        .recentsTitle{
            text-align:${titleLength < 20 ? 'center' : 'left'};
            font-size: ${titleLength < 20 ? '1.5em' : "1.3em"};
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};
            margin-top:.3em;
            word-spacing:.1em;
    letter-spacing: .07em;

        }
}
.recentsDate{
    text-align: right;
    font-family: ${fonts.hair.family};
    font-weight: ${fonts.hair.weight} + 100;
    margin-right:.6em;
    font-size:1.07em;
    margin-top:.8em;


}
.recentsMoreTxt{
            margin-top:.8em;
}
.recentsDetail{
display:${detailsLength <= 58 ? 'initial':'none'};
 font-family: ${fonts.hair.family};
 font-family: ${fonts.hair.weight};
word-spacing:.5em;
letter-spacing: .08em;

}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
    .recentsHeader{
        .thumbContainer{
            width:60%;
        }
    }
 }
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    min-height: 4em;
    .recentsHeader{
        flex-direction:row;
        align-items: center;
        justify-content: center;
        .thumbContainer{
            /* max-width:6em; */
            width:50%;
            margin:0;
            height:5em;
            margin-right:.7em;

        }
         .recentsTitle{
                width:70%;
            }
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  }


// for 4k
@media (min-width: 2000px) {
    min-height:22em;
    width:90%;
    margin:0 auto;
    margin-bottom:2em;
    .recentsHeader{
        .thumbContainer{
            height:12em;
            width:40%;
           
            /* background: blue; */
        }
         .recentsTitle{
                /* width:70%; */
                font-size: 2.2em;
            }

    }
    .recentsDate{
        font-size: 1.9em;
    }
    .recentsDetail{}
    .recentsMoreTxt{}
}
   
`
// =============================================================================
// Gsap 
    // const  detailsSplit = new SplitText('.recentsDetail',{type:"words,lines"})
// =============================================================================
//    console.log(detailsSplit)


    return (
        <Item>
            <div className={'recentsHeader'}>
                <div className={"thumbContainer"}>
                {/* <img className={'recentsThumbnail'} src={data.url} alt='thumbnail'/> */}
                </div>
                <h4 className={'recentsTitle'}>{ data.title}</h4>
            </div>


            <h3 className={'recentsDate bolded'}>
               {data.date || `${month}/${day}`}
            </h3>


            <p className={'recentsDetail'}> {data.details} </p>


            <h4 className={'moreTxt recentsMoreTxt'}>Show More</h4>
        </Item>
    )
}

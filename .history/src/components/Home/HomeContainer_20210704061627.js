/**==============================================
 * todo                  TODO
 *   Add Links To buttons
 *  Connect to database
 * Retrieve initial Data from database
 *  Set data on app Page 
 *
 *=============================================**/
import React, { Component } from 'react';
import styled from 'styled-components'
import {fonts,colors} from '../../utills/fonts'
import { Link } from 'react-router-dom'

//


// =============================================================================
// Styled 
const Main = styled.main`
height:95vh;
overflow-y:scroll;
padding-top: 5%;
color:white;
display:flex;
flex-wrap:wrap;
justify-content: center;
.homeContainers{
    width:98%;
    height:70vh;
    border:solid white 1px;

}
#actionsContainer{
    display:flex;
    /* flex-wrap:wrap; */
    flex-direction: column;
    align-items: center;
    border:none;
    margin-top:10%;
    .actions{
        height:30vh;
        background: rgba(0,0,0,.63);
        border:solid white 1px;
        width:90%;
        border-radius: .7em;
        display:flex;
        flex-direction: column;
        align-items: center;
        .actionTitles{
            font-size: 2em;
            text-align: center;
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};
            line-height:1em;
            margin-top: 1em;
           
        }
        &:nth-child(2){
            margin-top:10%;
        }
        .actionsBtn{
            width:80%;
            height:3rem;
            border-radius: .6em;
            border:white 1px solid;
                background: ${colors.blue};
                color:white;
                font-size: 1.3em;
                font-family: ${fonts.regular.family};
                font-weight: ${fonts.regular.weight};
                outline:none;
                margin-top:1em;
            
        
        }
        .secondary{
            background-color: ${colors.orange};
        }
       
    }
}

#recentBox{
    min-height:40vh;
    overflow-y: hidden;
    #recentsDivider{
        margin:.7em 0;
    }
    #recentsCont{
        /* padding-top:1em; */
        overflow-y:scroll;
        height:92%;
    }

}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
    #actionsContainer{
        .actions{
            .actionTitles{
                width:80%;
            }
            .actionsBtn{
                height:3.4em;
            }
        }
    }
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
       #actionsContainer{
        .actions{
            .actionTitles{
                width:70%;
                font-size: 2.5em;
            }
            .actionsBtn{
                height:3.4em;
            }
        }
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    /* align-items: center; */
    padding:0;
    padding-top:4%;
    .homeContainers{
        width: 45%;
    }
       #actionsContainer{
           margin-top: 0;
           margin-left:15%;
        .actions{
            .actionTitles{
                width:80%;
                position: relative;

            }
            .actionsBtn{
                /* height:3em;
                position: relative;
                bottom:10%; */
           
            }
        }
    }
    #recentBox{
        margin:0;
        margin-left:auto;
        width:30%;
   position:relative;
    bottom:5%;
    right:.4%;
    border-right:none;

        /* justify-self:flex-end; */
    }
 }
 //* INFO 
@media (min-width: 1200px) {
.homeContainers{
    height:70vh;
    width:45%
}
    #actionsContainer{
               flex-direction: row;
               align-items: center;
               width:60%;
               margin-left:9%;
        .actions{
            width:80%;
            .actionTitles{
                width:70%;
                font-size: 2.5em;
                &:nth-child(1){
                    font-size: 2em;
                }
            }
            .actionsBtn{
                height:3em;
                top:.3em;
            }
              &:nth-child(2){
            margin:0;
            margin-left: 8%;
        }
        }
    }
    #recentBox{
    width:22%;
    height:80vh;
    }
 }

//* For 4k screens 
@media (min-width:2000px){
    #actionsContainer{
        margin-left: 4%;
        width:67%;
        .actions{
            height:40vh;
            .actionTitles{
                width:70%;
                &:nth-child(1){
                font-size: 4em;


                }
            }
            .actionsBtn{
                height:4.5em;
                font-size: 2em;
            }
        }
    }
    #recentBox{
    width:26%;
    }
}

`
// =============================================================================


class Home extends Component {
  render() {
    return (
        <Main>
{/*================== Tours Container =================*/}
            <div id='actionsContainer' className={'homeContainers'}>
                { /*================== Tours Info =================*/ }
                <div className={'actions'}>
                    <h2 className={'actionTitles'}>
                        Place your <strong className={'bolded'}> spot </strong> on the next city <strong className={'bolded'}>Tour</strong>
                    </h2>
                    <button
                        className={'actionsBtn'} >
                        View Tours
                    </button>
                </div>

                { /*================== Booking Info =================*/ }
                <div className={'actions'}>
                    <h2 className={'actionTitles'}>
                     Check Out Personal Booking 
                    </h2>
                    <button className={'actionsBtn secondary'} >Book Today</button>
                </div>
            </div>
{/*=============================================*/}       

{/*================== Recent Container =================*/}
            <div id="recentBox" className={'homeContainers'}>
                <h2 className={'sectionTitle '}>Upcoming Events</h2>
                <div id='recentsDivider' className={'divider'}/>

                <div id='recentsCont'>
                {this.props.recentItems.map(e => {
                    return <RecentItems data={e}/>
                })}
                </div>
                    
            </div>
 {/*=============================================*/}       
        </Main>
    );
    }
}
Home.defaultProps = {
    recentItems: [
        {
            title: '4th of july celebration is a great wonderful day ',
            date: `${new Date().getMonth()}/${new Date().getDate()}`,
            details:`Come along as we wish upon the bright lights of summer its`
        },
        {
            title: 'Summer of the devils brewing of june',
            date: `${new Date().getMonth()}/${new Date().getDate() + 1}`
        },
        {
            title: '4th of july celebration',
            date: `${new Date().getMonth()}/${new Date().getDate() +2}`
        },
        {
            title: '4th of july celebration',
            date: `${new Date().getMonth()}/${new Date().getDate()  +3}`
        },
        {
            title: '4th of july celebration',
            date: `${new Date().getMonth()}/${new Date().getDate() + 4}`
        },
    ]
}

export default Home

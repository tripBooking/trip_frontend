import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from '../Forms'
import {fonts,colors} from '../../utills/fonts'
import * as yup from 'yup'

const ToursSignup = styled.div`
color:white;
background:${colors.darkBkg};
height:100vh;

#toursSignup_title{
    text-align:center;
    font-family : ${fonts.bold.family};
    font-weight: ${fonts.bold.weight};
    font-size: 2.5em;
    margin-top: 1em;
    margin-bottom:.5em;
}

#signup_dataItemContainer{
    .signup_dataItem{
         position: relative;
        width:52%;
        font-size: 1em;

    }
    #signup_dateContainer{
        display:flex;
        align-items: baseline;
        padding-left:1em;
       
        h3{
            margin-right:4%;
        }
    }
    #signup_startContainer{
        position: absolute;
        /* border:solid white 1px; */
        width:40%;
        left:68%;
        top:6.2em;
        text-align: center;
    }
    #signup_costContainer{
        display:flex;
        align-items: baseline;
        margin-top:.6em;
        padding-left:1em;

         h3{
            margin-right:4%;
        }
    }
 
    

}

#signup_formContainer{
    margin-top:1em;
    padding:1em 0 ;
     width:90%;
        margin:0 auto;

    /* background:yellow; */
    .tourSignup_input{
       
        background: none;
        border:none;
        border-bottom:white .2em solid;
        font-size:1.2em;
        outline:none;
        margin-top:.6em;
        color:white;
        text-align:center;
        padding-bottom:.6em;
        margin:0 auto;
        /* border:solid white 1px; */

        ::placeholder{
            color:whitesmoke
        
        }
    }
    .signup_formError{
        width:100%;
        text-align:center;
        font-size:1.1em;
        color:${colors.orange};
        margin-top:.6em;
        /* background:white; */
        
    }
    .tourSignup_formItemCont{
        margin: 0 auto;
        /* border:solid white 1px; */
        margin-bottom:2.4em;
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content:center;
    }
    #signup_formBtnCont{
        /* border:solid white 1px; */
        display: flex;
        justify-content: center;
        margin-top:4em;

          #signup_formBtn{
            background: ${colors.blue};
            position: relative;
            width:50%;
            padding :4% 0;
            border-radius: .4em;
            border:white 1px solid;
            color:white;
            font-size:1.3em;
            font-family: ${fonts.regular.family};
            font-weight: ${fonts.regular.weight};

        }

    }
  

}
#signup_dataItemCont{
       ::-webkit-scrollbar{
           display:none;
       }
    --ms-overflow-style:none; 
    scrollbar-width: none;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    height:80vh;
    #signup_dataItemContainer{
        font-size:1.4em;
        #signup_startContainer{
            top:28%;
            right:60%;
        }

    }

    #signup_formContainer{
        .tourSignup_input{
            font-size:1.4em;
    }
        #signup_formBtnCont{
            #signup_formBtn{
                width:35%;
                font-size:1.8em;
                padding:.8em 0;
            }
        }
 }
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    
    #signup_dataItemCont{
        height:48vh;
        overflow-y: scroll;
      

    }
      #signup_formContainer{
        font-size:1.1em;
        width:50%;
        position: relative;
        top:-9%;
        .tourSignup_input{
            width:50%;
        }
        #signup_formBtnCont{
            #signup_formBtn{
                width:38%;
                font-size:1.7em;
                padding:.5em 0;
            }
        }
    

    }

    
}
// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    width:60%;
margin:0 auto;
 }

// for 4k
@media (min-width: 2000px) {
    
#toursSignup_title{
    font-size:3.8em;
}
#signup_dataItemContainer{
    font-size:2.3em;
}
#signup_formContainer{
    .tourSignup_input{
        font-size : 2em;
    }
    #signup_formBtnCont{
        #signup_formBtn{
            font-size:3em;
            top:-2em;
            width:36%;
        }

    }
     #signup_formBtnCont{
         margin-top: 5em;
     }

}

}


`

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    stateData = this.props.location.state
    
    render() {
        const submitData = (e) => {
            // e.preventDefault()
            console.log(e)
            console.log('yesss')
        }
        const prompts = [
            {
                q: "First Name",
                type: 'text',
                id: 'fname',
                limit:15
            },
            {
                q: "Last Name",
                type: 'text',
                id: 'lname',
                limit:15
            },

            {
                q: 'Email',
                type: 'email',
                id: "email",
                limit:30
            },

            {
                q: "Mobile Number",
                type: "phone",
                id: "mPhone",
                limit:10,
            },

        ]
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        const scheme  = yup.object().shape({
            fname: yup.string().required("first name is required").min(3),
            lname: yup.string().required(),
            email: yup.string().email('Invalid Email').required('A email is required'),
            mPhone: yup.string().matches(phoneRegExp,'Phone number not Valid').required('A phone number is required')
      
         })


        
        const {cost,date,start,title} = this.stateData
        return (
            <ToursSignup>
                <h1 id='toursSignup_title'>Book Your Spot </h1>
                <div id="signup_dataItemContainer">

                    <div id="signup_dateContainer" className={"signup_dataItem"}>
                        <h3>Date</h3>
                        <h4>{ date}</h4>
                    </div>

                    <div  id='signup_startContainer' className={"signup_dataItem"}>
                        <h3>Start</h3>
                        <h4>{start}</h4>
                    </div>
                 
                    <div id='signup_costContainer' className={"signup_dataItem"}>
                        <h3>Cost</h3>
                        <h4>{ cost}</h4>
                    </div>
                
                </div>
                
                <div id="signup_formContainer">
                    <Form
                        containerClass={'tourSignup_formItemCont'}
                        formInputClass={'tourSignup_input'}
                        btnCont = {'signup_formBtnCont'}
                        btnId={'signup_formBtn'}
                        errorsClass= {'signup_formError'}
                        scheme ={scheme}
                        formPrompts={prompts}
                        submitHandle={submitData}
                        btnText={'Next'}
                        dataItemCont={"signup_dataItemCont"}
                    />
                </div>
     
            
            </ToursSignup>
        )
    }
}

import React,{useEffect,useCallback,useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


function Signup(props) {
const { register, handleSubmit, formState: { errors, isValid, } } =useForm({resolver:yupResolver(props.scheme)})
    const formPrompts = props.formPrompts

    return (
        <form onSubmit={handleSubmit(props.submitHandle)}>

            <div id={props.dataItemCont}>
                
                {formPrompts.map(i => {
                    // const {min,max,pattern,required} = i.valid
                    const itemRegister = register(i.id)
                    return (
                        <div id={`container_${i.id}`} className={props.containerClass} >
                            <input
                                id={i.id}
                            className={props.formInputClass}
                            placeholder={i.q}
                                {...itemRegister}
                                maxLength={i.limit}
                            />
                            <p className={props.errorsClass} > {errors[i.id] ? errors[i.id].message : null} </p>
                        </div>
                    )
                })}
            </div>


            <div id={props.btnCont}>
            <button id={props.btnId} type='submit' onSubmit={handleSubmit(props.submitHandle)}>{ props.btnText}</button>

            </div>
                    
        </form>
    )
}

Signup.defaultProps = {
    submitHandle: (e) => {
        console.log(e)
    },
    formPrompts: [{
        q: "first Name",
        type: 'text',
        id: 'fname',
    },
    ],
    scheme: yup.object().shape({
        fname  : yup.string().required("first name is required").min(3)
    }),

    containerClass: ' formContainer ',
    inputClass: 'formInputClass',
    errorsClass: "errorClass",
    btnId: 'signbtn',
    
    btnText : 'submit'



    
   
    
    
}

export default Signup
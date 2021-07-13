import React,{useEffect,useCallback,useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


function Signup(props) {
const { register, handleSubmit, formState: { errors, isValid, } } =useForm({resolver:yupResolver(props.scheme)})
    const formPrompts = props.formPrompts

    return (
        <form onSubmit={handleSubmit(props.submitHandle)}>


            {formPrompts.map(i => {
                // const {min,max,pattern,required} = i.valid
                const itemRegister = register(i.id,{valueAsNumber:true })
                return (
                    <div className={props.containerClass} >
                        <input
                            id={i.id}
                        className={props.formInputClass}
                         placeholder={i.q}
                            {...itemRegister}
                            maxLength={i.limit}
                        />
                        <p id={props.errorsClass} > {errors[i.q] ? errors[i.q].message : null} </p>
                    </div>
                )
            })}

            <button type='submit' onSubmit={handleSubmit(props.submitHandle)}>Submit</button>
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
    errorsClass: "errorClass"



    
   
    
    
}

export default Signup
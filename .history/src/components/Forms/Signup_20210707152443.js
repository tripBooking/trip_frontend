import React,{useEffect,useCallback,useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
function Signup(props) {
const { register, handleSubmit, formState: { errors, isValid, } } =useForm()
    const formPrompts = props.formPrompts

    return (
        <form onSubmit={handleSubmit(props.submitHandle)}>
            {formPrompts.map(i => {
                const {min,max,pattern,required} = i.valid
                const itemRegister = register(i.q,{ required,min:})
                return (
                    <div>
                        <label for={i.id}> {`${i.q} :`} </label>
                        <input
                            id={i.id}
                            {...itemRegister}
                        />
                        <p> {errors[i.q] ? errors[i.q].message : null} </p>
                    </div>
                )
            })}
            {
                isValid ?
                    <button>Submit</button>
                    :null
            }
        </form>
    )
}

Signup.defaultProps = {
    submitHandle: (e) => {
        console.log(e)
    },
    formPrompts: [{
        q: "firstName",
        type: 'text',
        id: 'fname',
        valid: {
            required:{value:true,message:'User must have a name'}
        
        }
    }
    ],
    
   
    
    
}

export default Signup
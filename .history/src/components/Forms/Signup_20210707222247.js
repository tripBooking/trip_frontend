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
                const itemRegister = register(i.q,{...i.valid})
                return (
                    <div>
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
    },
    ],
    scheme: yup.object().shape({
        firstName  : yup.string().required("first name is required").min(3).max(15,'first name is to long')
    })
    
   
    
    
}

export default Signup
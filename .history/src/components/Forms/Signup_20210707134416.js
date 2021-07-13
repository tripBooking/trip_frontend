import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
function Signup(props) {
    let scheme
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(scheme) })
    const onSubmit = (data) => props.submitHandle(data)
    const formPrompts = props.formPrompts
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('yee')
        }}>
            {formPrompts.map(i => {
                return (
                    <div>
                    <label for={i.id}> {`${i.q} :`} </label>
                        <input id={i.id} name={i.id} {...register(i.q)}/>
                    </div>
                )
            })}
        </form>
    )
}

Signup.defaultProps = {
    submitHandle: (e) => {
        e.preventDefault()
        console.log(e)
    },
    formPrompts:[{q:"first name", type:'text',id:'fname'}]
    
}

export default Signup
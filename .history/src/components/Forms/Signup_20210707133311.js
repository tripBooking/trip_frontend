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
        <form>
            {formPrompts.map(i)}
            
        </form>
    )
}

Signup.defaultProps = {
    submitHandle: (e) => { console.log(e) },
    formPrompts:[{q:"name", type:'text',id:'fname'}]
    
}

export default Signup
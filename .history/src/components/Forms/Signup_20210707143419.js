import React,{useEffect,useCallback} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
function Signup(props) {
    const { register, handleSubmit, formState: { errors,isValid } ,watch} = useForm({ resolver: yupResolver(props.yupScheme), })
    const formPrompts = props.formPrompts
    const watchAll = watch()
    useEffect(() => {
        if (isValid) {
        console.log('validated')
    }
},[watchAll])

    return (
        <form onSubmit={handleSubmit(props.submitHandle)}>
            {formPrompts.map(i => {
                return (
                    <div>
                        <label for={i.id}> {`${i.q} :`} </label>
                        <input id={i.id} name={i.id} {...register(i.q)} />
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
    formPrompts: [{ q: "firstName", type: 'text', id: 'fname' }],
    yupScheme : yup.object().shape({
                             firstName :yup.string().required('First name is required for booking📢 ').min(3)
    })
    
    
}

export default Signup
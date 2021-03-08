import React, {useEffect, useState} from 'react'
import {Message} from './Message'
import './effects.css'

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name:'',
        email:''
      })
      
    const {name, email}= formState;
    
    useEffect(() => {
        //console.log('se renderiza por primera vez');
    }, []);

    useEffect(() => {
        //console.log('cambio en el estado del formulario');
    }, [formState]);

    const handleInputChange = ({target}) => { //deses de Obj "e"
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    
    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div className='form-group'>
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name==='Gabriel') && <Message />}
        </>
    )
}

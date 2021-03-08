import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {
    
    const [{description}, handleInputChange, reset] = useForm({ //desestruc de formValues (es un objeto)
        description: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length < 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4 className='mt-1 mb-1'>Agregar tarea</h4>
                    <hr />
                    
                    <form onSubmit={handleSubmit}>
                        <input 
                            className='form-control mt-2 mb-2'
                            type='text'
                            name='description'
                            placeholder='Ingrese tarea'
                            autoComplete='off'
                            value={description}
                            onChange= {handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mb-3 mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
        </>
    )
}

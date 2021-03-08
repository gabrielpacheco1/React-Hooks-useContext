import React from 'react'

export const TodoListItem = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            {
                todos.map((todo, i) =>(
                    <li
                        key={todo.id}
                        className='list-group-item'
                    >
                        <p 
                            className={`${todo.done && 'complete'}`}
                            onClick={()=> handleToggle(todo.id)}
                        >
                            {i+1}. {todo.desc}
                        </p>
                        <button 
                            className='btn btn-danger'
                            onClick={() => handleDelete(todo.id)}
                        >
                            Borrar
                        </button>
                    </li>
                ))
            }
        </>
    )
}

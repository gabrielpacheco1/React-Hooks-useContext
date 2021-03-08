import React, {useState, useEffect} from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button 
                className= 'btn btn-primary mt-2 mostrar'
                onClick= {() => {
                    setShow(!show);
                }}
            >Show | Hide
            </button>
        </div>
    )
}

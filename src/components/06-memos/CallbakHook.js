import React, {useState, useCallback} from 'react'
import { ShowIncrement } from './ShowIncrement'
import '../02-useEffect/effects.css'


export const CallbakHook = () => {
    
    const [counter, setCounter] = useState(10)

    const increment = useCallback( (num) => { //num es el recibido desde ShowIncrement.js
        setCounter(c => c + num );
    }, [setCounter])
    
    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}

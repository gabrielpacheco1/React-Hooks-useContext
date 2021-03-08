//Componente que renderiza lo que está dentro de <smalll> (el contador)

import React from 'react'

export const Small = React.memo(({value}) => { //memoriza el componente con los valores de las props (si no cambian,                                                    no se vuelve a llamar). Solo se vuelve a renderizar si cambian las props
    console.log('Me volvi a llamar')
    return (
        <small>{value}</small>
    )
});

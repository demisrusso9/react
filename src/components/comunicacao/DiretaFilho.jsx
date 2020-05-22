import React from 'react'

export default props =>
    <div>
        <span>{props.texto} </span>
        <span>{props.numero} </span>
        <span>{props.boo ? 'Verdadeiro' : 'False'}</span>
    </div>
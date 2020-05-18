import React from 'react'

export default props => {
    return (
        <div>
            <span>{props.texto} </span>
            <span>{props.numero} </span>
            <span>{props.boo ? 'V' : 'F'}</span>
        </div>
    )
}
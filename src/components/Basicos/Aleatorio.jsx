import React from 'react'

export default props => {
    const { min, max } = props
    const numero = parseInt(Math.random() * (max - min)) + min;
    return (
        <>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Valor Aleatório: {numero}</p>
        </>
    )
}
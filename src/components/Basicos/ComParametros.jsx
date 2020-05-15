import React from 'react'

export default props => {    
    const preco = props.price >= 300.0 ? 'Caro' : 'Baratin'

    return (
        <div>
            <p>{props.fnome} tem o carro <strong>{props.car}</strong> e ele é muito {preco}</p>
            <p>Preço: {props.price}</p>
        </div>
    )
}
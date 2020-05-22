import React from 'react'

export default props => {

    const gerarIdade = () => parseInt(Math.random() * (15)) + 40

    return (
        <div>
            <p>Filho</p>
            <button onClick={e => props.click('Demis', gerarIdade(), 'Diretor')}>
                Enviar Info
            </button>
        </div>
    )
}
import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const alunosLI = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id}, Nome: {aluno.nome} {aluno.nota}</li>
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosLI}
            </ul>
        </div>
    )
}
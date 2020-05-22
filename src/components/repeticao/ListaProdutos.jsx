import React from 'react'
import produtos from '../../data/produtos'
import '../repeticao/ListaProdutos.css'

export default () => {

    const tabelaProdutos = produtos.map(produto => {
        return <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.categoria}</td>
            <td>{produto.preco}</td>
        </tr>
    })

    return (
        <table className='desafioTabela'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preco</th>
                </tr>
            </thead>

            <tbody>
                {tabelaProdutos}
            </tbody>
        </table>
    )
}
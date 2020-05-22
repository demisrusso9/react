import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default () => {

    let [nome, setNome] = useState('');
    let [idade, setIdade] = useState(0);
    let [profissao, setProfissao] = useState('');

    function informacoes(nome, idade, profissao) {
        setNome(nome);
        setIdade(idade);
        setProfissao(profissao);
    }
    
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            <IndiretaFilho click={informacoes}></IndiretaFilho>
        </div>
    )
}
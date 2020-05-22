import React from 'react';

import './App.css'
import Header from './components/Basicos/Header'
import Footer from './components/Basicos/Footer'

import Parametro from './components/Basicos/ComParametros'
import Frag from './components/Basicos/Fragmentos'
import Aleatorio from './components/Basicos/Aleatorio'
import Familia from './components/Basicos/Familia'
import FamiliaMembro from './components/Basicos/FamiliaMembro'
import Card from './components/layout/Card'

import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'

import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import Direta from './components/comunicacao/Direta'
import Indireta from './components/comunicacao/Indireta'


export default () =>
    <div className='App'>

        <Header />

        <h2>Fundamentos React</h2>

        <div className="Cards">
            <Card title='#09 - Comunicaçao Indireta' color='#FFC33C'>
                <Indireta></Indireta>
            </Card>

            <Card title='#08 - Comunicaçao Direta' color='#542733'>
                <Direta></Direta>
            </Card>

            <Card title='#07 - Renderizacao Condicional' color='#982395'>
                <ParOuImpar numero={33} />
                <UsuarioInfo usuario={{ nome: 'Demis' }} />
            </Card>

            <Card title='#06 - Desafio Repeticao' color='#5BB12F'>
                <ListaProdutos />
            </Card>

            <Card title='#05 - Repetiçao' color='#273746'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card title='#04 - Componente com Filhos' color='##00FFFF'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='Demis' />
                    <FamiliaMembro nome='Deijanira' />
                    <FamiliaMembro nome='Junior' />
                    <FamiliaMembro nome='Dominique' />
                </Familia>
            </Card>

            <Card title='#03 - Desafio Aleatório' color='#5BB12F'>
                <Aleatorio min={30} max={100} />
            </Card>

            <Card title='#02 - Fragmentos' color='#000080'>
                <Frag />
            </Card>

            <Card title='#01 - Parametros' color='#008080'>
                <Parametro fnome='Demis Russo' car='Mclaren' price={400.0} />
                <Parametro fnome='Dominique' car='Suzuki' price={30.0} />
            </Card>
        </div>


        <Footer />
    </div>    
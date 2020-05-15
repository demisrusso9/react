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

export default () =>
    <div className='App'>

        <Header />
        <h2>Fundamentos React</h2>

        <div className="Cards">
            <Card title='#04 - Componente com Filhos' color='##00FFFF'>
                
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='Demis' />
                    <FamiliaMembro nome='Deijanira' />
                    <FamiliaMembro nome='Junior' />
                    <FamiliaMembro nome='Dominique' />
                </Familia>
            </Card>

            <Card title='#03 - Desafio Aleatório' color='#800080'>
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
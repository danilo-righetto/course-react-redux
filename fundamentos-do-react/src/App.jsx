import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
  <div>
    <h1>Fundamentos</h1>
    <Card titulo="Desafio Aleatorio">
      <Aleatorio min={10} max={20} />
    </Card>
    <Card titulo="Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="Com Parametro">
      <ComParametro titulo="Danilo" subtitulo="Righetto" />
    </Card>
    <Card titulo="Primeiro">
      <Primeiro></Primeiro>
    </Card>
  </div>
);

import './index.css'
import ReactDOM from 'react-dom';
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'

const tag = <strong>Olá react - Danilo Righetto</strong>
const el = document.getElementById('root');
ReactDOM.render(
  <>
    <Primeiro></Primeiro>
    {tag}
    <ComParametro titulo="Danilo" subtitulo="Righetto" />
    <Fragmento />
  </>,
  el
);
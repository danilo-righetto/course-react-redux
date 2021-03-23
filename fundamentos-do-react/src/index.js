import './index.css'
import ReactDOM from 'react-dom';
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamentro'

const tag = <strong>Olá react - Danilo Righetto</strong>
const el = document.getElementById('root');
ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    {tag}
    <ComParametro titulo="Danilo" subtitulo="Righetto" />
  </div>,
  el
);
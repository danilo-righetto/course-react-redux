import './index.css'
import ReactDOM from 'react-dom';
import React from 'react'
import Primeiro from './components/basicos/Primeiro'

const tag = <strong>Olá react - Danilo Righetto</strong>
const el = document.getElementById('root');
ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
  </div>,
  el
);
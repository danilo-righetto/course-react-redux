import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'

const tag = <strong>Olá react - Danilo Righetto</strong>
export default function App(props) {
  return (
    <>
      <Fragmento />
      <Primeiro></Primeiro>
      {tag}
      <ComParametro titulo="Danilo" subtitulo="Righetto" />
    </>
  );
}
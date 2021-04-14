import React from "react";

import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaFilhos from "./components/basicos/FamiliaFilhos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import FamiliaFilhosClonados from "./components/basicos/FamiliaFilhosClonados";
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"

export default () => (
  <div className="App">
    <h1>Fundamentos</h1>
    <div className="Cards">
      <Card titulo="#09 - Desafio Repetição" color="#1D3557">
        <TabelaProdutos />
      </Card>
      <Card titulo="#08 - Repetição" color="#457B9D">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#07 - Familia com Filhos Clonados" color="#A8DADC">
        <FamiliaFilhosClonados sobrenome="Machado">
          <FamiliaMembro nome="Gustavo" sobrenome="Guanabara"></FamiliaMembro>
          <FamiliaMembro nome="Fernando" sobrenome="Augusto"></FamiliaMembro>
        </FamiliaFilhosClonados>
      </Card>
      <Card titulo="#06 - Familia com Filhos" color="#E63946">
        <FamiliaFilhos sobrenome="Alves">
          <FamiliaMembro nome="Gustavo" sobrenome="Guanabara"></FamiliaMembro>
        </FamiliaFilhos>
      </Card>
      <Card titulo="#05 - Familia" color="#E76F51">
        <Familia sobrenome="Cosme Righetto"></Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatorio" color="#F4A261">
        <Aleatorio min={10} max={20} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E9C46A">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#2A9D8F">
        <ComParametro titulo="Danilo" subtitulo="Righetto" />
      </Card>
      <Card titulo="#01 - Primeiro" color="#264653">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

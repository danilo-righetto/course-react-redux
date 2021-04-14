import React from 'react'
import alunos from '../../data/alunos'

export default props => {
  const listaAlunos = alunos.map(aluno => {
    return (
      <li key={aluno.id}>
        {aluno.id}) Nome do aluno: {aluno.nome} -> Nota: {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none"}}>
        {listaAlunos}
      </ul>
    </div>
  );
}

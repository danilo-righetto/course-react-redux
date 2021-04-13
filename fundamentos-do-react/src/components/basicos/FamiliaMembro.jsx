import React from 'react'
export default (props) => {
  return (
    <div>
      <div>
        <span>
          {props.nome} <strong>{props.sobrenome}</strong>
        </span>
      </div>
    </div>
  )
}

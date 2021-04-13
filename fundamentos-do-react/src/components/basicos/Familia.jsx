import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="Maria" sobrenome="Silva"/>
      <FamiliaMembro nome="Pedro" {...props}/>
    </div>
  )
}

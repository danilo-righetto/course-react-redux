import React from 'react'

export default props => {
  return (
    <div>
      {/* Clonando um elemento */}
      {React.cloneElement(props.children, {...props})}
    </div>
  )
}

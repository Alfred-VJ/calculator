import React from 'react'

const Boton = (props) => {
  return (
    <button onClick={()=>props.click(props.value)}>{props.value}</button>
  )
}

export default Boton
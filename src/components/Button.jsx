import React from 'react'

function Button({text}) {
  return (
    <button style={{padding: "10px 30px" , background:" #5783db" , borderRadius: "5px" , border: "none"}}>
        {text}
    </button>
  )
}

export default Button;
import React, { useState } from 'react'
import Product from './Product'
import Student from './Student'
// parent
function FunCom() {
  const [state, setState] = useState("")

  const rec = (each) => {
    setState(each)
  }
  return (
    <div>
      <h1>{state}</h1>
      <Student passfun={rec} />
      <Student name="divya akaoooo" course="M.B.B.S" passfun={rec} />
      <Student name="sathsih" course="BE - TCH" passfun={rec} />
      <Product />
    </div>
  )
}

export default FunCom
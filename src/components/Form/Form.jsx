import './Form.css';
import React from 'react'
import Forminputs from './Forminputs';

const Form = (props) => {
  const formValue = (values) => {
    props.onPassed(values)
  }

  return (
    <div id="outer-container" className="container">
      <Forminputs onSubmit={formValue} />
    </div>
  )
}

export default Form;
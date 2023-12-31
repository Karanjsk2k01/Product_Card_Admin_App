import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import React, { useState } from 'react';
import Entry from './components/Entries/Entry'


function App() {

  const [value, setValue] = useState([])

  let entries = (newValue) => {
    setValue((prev) => ({
      ...prev,
      value: newValue
    }));
  };
  return (
    <div className="main_container">
      <Form onPassed={entries} />
      <Entry data={value} />
    </div>
  );
}

export default App;

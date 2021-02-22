import './App.css';
import React from 'react';
import InputText from './components/InputText';
import Fieldset from './components/Fieldset';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Fieldset legend="Dados Pessoais">
          <InputText maxLength='40' onChange={ (e) => e.target.value = e.target.value.toUpperCase() }>Nome: </InputText>
          <InputText maxLength='50'>Email: </InputText>
          <InputText maxLength='11'>CPF: </InputText>
          <InputText maxLength='200' onChange={(e) => e.target.value = e.target.value.replace(/[^a-zA-Zs0-9\s,áâãéêíóôõúç]/g, "")}>Endereço: </InputText>
          <InputText maxLength='28'>Cidade: </InputText>
        </Fieldset>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import InputText from './components/InputText';
import Fieldset from './components/Fieldset';

class App extends React.Component{
  render() {
    const limpar = (target) => {
      const firstLetter = (target.substring(0,1));
      if(!isNaN(firstLetter)){
        return '';
      }
      return target;
    }

    return (
      <div className="App">
        <Fieldset legend="Dados Pessoais">
          <InputText maxLength='40' onKeyUp={ (e) => e.target.value = e.target.value.toUpperCase() }>
            Nome: 
          </InputText>
          <InputText maxLength='50'>
            Email: 
          </InputText>
          <InputText maxLength='11' onKeyUp={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}>
            CPF: 
          </InputText>
          <InputText maxLength='200' onKeyUp={(e) => e.target.value = e.target.value.replace(/[^a-zA-Zs0-9\s,áâãéêíóôõúç]/g, "")}>
            Endereço: 
          </InputText>
          <InputText maxLength='28' onBlur={(e) => e.target.value = limpar(e.target.value) }>
            Cidade: 
          </InputText>
        </Fieldset>
      </div>
    );
  }
}

export default App;

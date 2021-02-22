import React from 'react';

class InputText extends React.Component{
  render(){
    const { children, maxLength, onChange } = this.props;
    return(
      <label>{ children }
        <input type='text' maxLength={ maxLength } onKeyUp={ onChange } pattern="[A-Za-z0-9]" required></input>
      </label>
    )
  }
}

export default InputText;

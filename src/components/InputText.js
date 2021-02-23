import React from 'react';

class InputText extends React.Component{
  render(){
    const { children, maxLength, onKeyUp, onBlur } = this.props;
    return(
      <label>{ children }
        <input
          type='text'
          maxLength={ maxLength }
          onKeyUp={ onKeyUp }
          onBlur={ onBlur }
          required>
        </input>
      </label>
    )
  }
}

export default InputText;

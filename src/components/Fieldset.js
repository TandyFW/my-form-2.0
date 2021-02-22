import React from 'react'

class Fieldset extends React.Component{
  render(){
    const { legend, children } = this.props;
    return(
      <fieldset>
        {legend && <legend>{legend}</legend>}
        {children}
      </fieldset>
    );
  }
}

export default Fieldset;

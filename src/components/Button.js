import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext; //variable name should not be changed

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

// static adds property directly to the class itself
// using Consumer is second method

// we will make use of consumer any time that we want to get 
// information out of multiple different context objects inside 
// of a single component using this context in conjunction
// with that context type property is only used any time we are 
// accessing a single context object inside of a component.
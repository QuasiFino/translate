import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext; //variable name should not be changed

  render() {
    console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary">{text}</button>
    );
  }
}

// Button.contextType = LanguageContext; //alt to static line

export default Button;

// static adds property directly to the class itself
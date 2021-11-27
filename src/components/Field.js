import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // static contextType = LanguageContext;
  render() {
    // const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Name' : 'Naam'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;


// we will make use of consumer any time that we want to get 
// information out of multiple different context objects inside 
// of a single component using this context in conjunction
// with that context type property is only used any time we are 
// accessing a single context object inside of a component.
import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = language => { //callback method
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        /* gets val from this.state. */

        <LanguageContext.Provider value={"dutch"}>
          <UserCreate />
        </LanguageContext.Provider>
        /* gets default val of dutch the time of render */

        <UserCreate /> 
        /* gets default val only at the time of render */
      </div>
    );
  }
}

export default App;

import React from "react";
// const context = React.createContext('english'); //passing default value

// console.log(context);  //shows consumer

// export default context;

// export default React.createContext('english');

const Context = React.createContext('english'); //C caps

// seperating business logic from App.js
export class LanguageStore extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }} >
        {this.props.children}
      </Context.Provider>
    );
  }
};

export default Context;

// import LanuageContext
// import { LanguageStore }
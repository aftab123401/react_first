import React, { Component } from 'react';

import './App.css';
import './css/bootstrap.min.css';
import Header from './layouts/Header';
import FlashMessageList from './flashmessages/FlashMessageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Header />
        <FlashMessageList />
       {this.props.children}
        
      </div>
    );
  }
}

export default App;

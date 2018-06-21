import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm';
import ChatScreen from './ChatScreen';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentScreen: 'WhatIsYourUsernameScreen',
      currentUsername: '',
    };
  }

  onUsernameSubmit = () => {
    fetch('http://localhost:3001/users', {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({username})
    }).then(response => {
        this.setState({
          currentUsername: response,
          currentScreen: 'ChatScreen'
        });
    }).catch( err => {
      console.error(err);
    })
  }

  render() {
    if(this.state.currentScreen === 'WhatIsYourUsernameScreen' ) {
          return <UsernameForm onSubmit={this.onUsernameSubmit} />
    } else {
      return <ChatScreen username={this.state.currentUsername} />
    }
  }
};

export default App

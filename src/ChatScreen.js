import React, { Component } from 'react';
import Chalkit from '@pusher/chakit';

class ChatScreen extends Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: '', // pusher url
      userId: this.props.username,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:8001/athenticate'
      })

    });
  }

  render() {
    return (
      <h1> Chat </h1>
      <p> Hello { this.props.username } </p>
    );
  }
};

export default ChatScreen;

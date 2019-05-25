import React, { Component } from 'react';

const withSpeech = WrappedComponent => {
  return class SpeechSynthesis extends Component {
    readMessage = text => {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      const voices = speechSynthesis.getVoices();
      msg.voice = voices[2];
      msg.lang = 'en-US';
      speechSynthesis.speak(msg);
    };

    render() {
      return <WrappedComponent read={this.readMessage} />;
    }
  };
};

export default withSpeech;

import React, { Component } from 'react';

const withSpeech = WrappedComponent => {
  return (props) => {
    const readMessage = text => {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      const voices = speechSynthesis.getVoices();
      msg.voice = voices[2];
      msg.lang = 'en-US';
      speechSynthesis.speak(msg);
    };
      return <WrappedComponent read={readMessage} {...props} />;
    
  };
};

export default withSpeech;

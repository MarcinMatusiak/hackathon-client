import React, { Component } from 'react';

class SpeechSynthesis extends Component {
  readMessage = () => {
    const msg = new SpeechSynthesisUtterance();
    //text to read
    msg.text = 'Speech';
    const voices = speechSynthesis.getVoices();
    msg.voice = voices[2];
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);


  }



  render() {
  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2012/04/12/12/51/speaker-29900_1280.png" onClick={this.readMessage} width="50px"/>
      
    </div>


  );
  }

};
export default SpeechSynthesis;

/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { func } from 'prop-types';
import Item from '../MessageItem';
import { MessageAreaContainer, Area, Buttons, IconStyled } from './MessageAreaStyles';
import withSpeech from '../../HOC/withSpeech.jsx';

class MessageArea extends Component {
  state = {
    words: [
      { _id: 'asdsad', name: 'I', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
      { _id: 'azxczc', name: 'love', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
      { _id: 'azsc', name: 'my', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
      { _id: 'azsdxczc', name: 'mom', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
    ],
  };

  deleteWord = id => {
    const newWords = this.state.words.filter(word => word._id !== id);
    this.setState({ words: newWords });
  };

  readWord = text => {
    this.props.read(text);
  };

  readMessage = arr => {
    const newArr = [];
    arr.forEach(word => newArr.push(word.name));
    const message = newArr.join(' ');
    this.props.read(message);
  };

  deleteAll = () => this.setState({ words: [] });

  render() {
    console.log(this.props);
    return (
      <MessageAreaContainer>
        <Area>
          {this.state.words.map(word => (
            <Item key={word._id} label={word.name} imgSrc={word.img} deleteElement={() => this.deleteWord(word._id)} />
          ))}
        </Area>
        <Buttons>
          <IconStyled className="fas fa-eraser" onClick={this.deleteAll} />
          <IconStyled className="fas fa-volume-up" onClick={() => this.readMessage(this.state.words)} />
        </Buttons>
      </MessageAreaContainer>
    );
  }
}

MessageArea.propTypes = {
  read: func,
};

export default withSpeech(MessageArea);

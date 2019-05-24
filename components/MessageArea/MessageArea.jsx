/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Item from '../MessageItem';
import { MessageAreaContainer, Area, Buttons, IconStyled } from './MessageAreaStyles';

class MessageArea extends Component {
  state = {
    words: [
      { _id: 'asdsad', name: 'aaaa', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
      { _id: 'azxczc', name: 'bbbb', img: 'https://image.flaticon.com/icons/svg/1694/1694970.svg' },
    ],
  };

  deleteWord = id => {
    const newWords = this.state.words.filter(word => word._id !== id);
    this.setState({ words: newWords });
  };

  deleteAll = () => this.setState({ words: [] });

  render() {
    return (
      <MessageAreaContainer>
        <Area>
          {this.state.words.map(word => (
            <Item key={word._id} label={word.name} imgSrc={word.img} deleteElement={() => this.deleteWord(word._id)} />
          ))}
        </Area>
        <Buttons>
          <IconStyled className="fas fa-eraser" onClick={this.deleteAll} />
          <IconStyled className="fas fa-volume-up" />
        </Buttons>
      </MessageAreaContainer>
    );
  }
}

export default MessageArea;

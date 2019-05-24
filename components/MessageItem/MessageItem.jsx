/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { string, func } from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { MessageItemContainer, Img, Label } from './MessageItemStyles';

const MessageItem = ({ imgSrc, label, deleteElement }) => {
  return (
    <MessageItemContainer>
      <Img>
        <div className="overlay" onClick={deleteElement}>
          <Icon className="fas fa-trash-alt" />
        </div>
        <img src={imgSrc} alt="img" />
      </Img>
      <Label>{label}</Label>
    </MessageItemContainer>
  );
};

MessageItem.propTypes = {
  imgSrc: string.isRequired,
  label: string.isRequired,
  deleteElement: func,
};

export default MessageItem;

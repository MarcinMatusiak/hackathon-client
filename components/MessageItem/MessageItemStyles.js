import styled from 'styled-components';

export const MessageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  img {
    width: 70px;
    height: 70px;
    padding: 10px;
  }
  .overlay {
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(150, 40, 27, 0.8);
    span {
      font-size: 30px;
    }
    &:hover {
      opacity: 1;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Label = styled.h3`
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
`;

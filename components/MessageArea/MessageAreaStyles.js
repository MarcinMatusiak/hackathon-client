import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

export const MessageAreaContainer = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Buttons = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const IconStyled = styled(Icon)`
  width: 55px !important;
  height: 55px !important;
  font-size: 40px !important;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #494949;
  }
`;

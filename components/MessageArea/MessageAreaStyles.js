import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

export const MessageAreaContainer = styled.div`
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Area = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
  border-radius: 5px;
  background: #fff;
`;

export const Buttons = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 675px) {
    flex-direction: column;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    font-size: 30px;
  }
`;

export const IconStyled = styled(Icon)`
  width: 55px !important;
  height: 55px !important;
  font-size: 40px !important;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #fff;
  }

  @media (max-width: 675px) {
    font-size: 30px !important;
  }

  @media (max-width: 400px) {
    font-size: 25px !important;
  }
`;

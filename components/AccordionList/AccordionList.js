import styled from 'styled-components';

export const MyGridList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  border: 1px solid blue;
  padding: 10px;
`;

export const MyGridListTile = styled.div`
  border: 1px solid green;
`;

export const MyHeader = styled.h2`
  padding: 20px;
  font-weight: bold;
  font-size: 2em;
`;

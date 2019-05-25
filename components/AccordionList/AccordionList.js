import styled from 'styled-components';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

export const MyExpansionPanelDetails = styled(ExpansionPanelDetails)`
  /*display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden; */
`;

export const MyGridList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  border: 1px solid blue;
`;

export const MyGridListTile = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid green;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  background: violet;
`;

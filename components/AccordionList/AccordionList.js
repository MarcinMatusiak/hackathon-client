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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  border: 1px solid blue;
  padding: 10px;
`;

export const MyGridListTile = styled.div`
  border: 1px solid green;
`;

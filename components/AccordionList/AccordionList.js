import styled from 'styled-components';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

export const MyExpansionPanelDetails = styled(ExpansionPanelDetails)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

export const MyGridList = styled(GridList)`
  width: 100%;
  border: 1px solid blue;
`;

export const MyGridListTile = styled(GridListTile)`
  border: 1px solid green;
  background: red;
`;

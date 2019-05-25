import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MyGridList, MyExpansionPanelDetails, MyGridListTile, ImageWrapper } from './AccordionList';

class AccordionList extends React.Component {
  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <img
              src="http://files.softicons.com/download/system-icons/windows-8-metro-invert-icons-by-dakirby309/png/256x256/Other/Power%20-%20Shut%20Down.png"
              alt="category icon"
            />
          </ExpansionPanelSummary>
          <MyExpansionPanelDetails>
            <MyGridList>
              <MyGridListTile>
                <ImageWrapper>
                  <img src="https://img.icons8.com/ios/50/000000/corgi-filled.png" />
                </ImageWrapper>
              </MyGridListTile>
              <MyGridListTile>
                <ImageWrapper>
                  <img src="https://img.icons8.com/ios/50/000000/corgi-filled.png" />
                </ImageWrapper>
              </MyGridListTile>
              <MyGridListTile>
                <ImageWrapper>
                  <img src="http://files.softicons.com/download/system-icons/windows-8-metro-invert-icons-by-dakirby309/png/256x256/Other/Power%20-%20Shut%20Down.png" />
                </ImageWrapper>
              </MyGridListTile>
              <MyGridListTile>
                <ImageWrapper>
                  <img src="https://img.icons8.com/ios/50/000000/corgi-filled.png" />
                </ImageWrapper>
              </MyGridListTile>
              <MyGridListTile>
                <ImageWrapper>
                  <img src="https://img.icons8.com/ios/50/000000/corgi-filled.png" />
                </ImageWrapper>
              </MyGridListTile>
            </MyGridList>
          </MyExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default AccordionList;

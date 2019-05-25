/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '../Card';
import MessageArea from '../MessageArea';
import { MyGridList, MyExpansionPanelDetails, MyGridListTile } from './AccordionList';
import { fetchWords } from '../../store/actions';
import verbSelector from '../../store/selectors/verbWords';

class AccordionList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWords();
  }

  renderCards(words) {
    if (words) {
      return words.map(word => (
        <MyGridListTile key={word._id}>
          <Card text={word.name} link={word.image} />
        </MyGridListTile>
      ));
    }
    return <div>Loading....</div>;
  }

  render() {
    console.log(this.props.verbs);
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
            <MyGridList>{this.renderCards(this.props.words)}</MyGridList>
          </MyExpansionPanelDetails>
        </ExpansionPanel>
        <MessageArea />
      </div>
    );
  }
}

export default connect(
  state => ({
    words: state.words,
    verbs: verbSelector(state),
  }),
  { fetchWords },
)(AccordionList);

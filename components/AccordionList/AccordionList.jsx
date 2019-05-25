/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelDetails } from '@material-ui/core';
import { func, string, array } from 'prop-types';
import Card from '../Card';
import MessageArea from '../MessageArea';
import { MyHeader, MyGridList, MyGridListTile } from './AccordionList';
import { fetchWords } from '../../store/actions';
import verbSelector from '../../store/selectors/verbWords';
import nounSelector from '../../store/selectors/nounWords';
import adjectiveSelector from '../../store/selectors/adjectiveWords';

class AccordionList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWords();
  }

  renderCards(words) {
    if (words) {
      return words.map(word => (
        <MyGridListTile key={word._id}>
          <Card word={word} />
        </MyGridListTile>
      ));
    }
    return <div>Loading....</div>;
  }

  changeColor(category) {
    switch (category) {
      case 'Nouns':
        return { backgroundColor: '#CBD3F5' };
      case 'Verbs':
        return { backgroundColor: '#FED2C6' };
      case 'Adjectives':
        return { backgroundColor: '#CEFAD2' };
      default:
        return null;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={this.changeColor(this.props.category)}>
            <img
              src="http://files.softicons.com/download/system-icons/windows-8-metro-invert-icons-by-dakirby309/png/256x256/Other/Power%20-%20Shut%20Down.png"
              alt="category icon"
            />
            <MyHeader>{this.props.category}</MyHeader>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {(() => {
              switch (this.props.category) {
                case 'Verbs':
                  return <MyGridList>{this.renderCards(this.props.verbs)}</MyGridList>;
                case 'Adjectives':
                  return <MyGridList>{this.renderCards(this.props.adjectives)}</MyGridList>;
                case 'Nouns':
                  return <MyGridList>{this.renderCards(this.props.nouns)}</MyGridList>;
                default:
                  return null;
              }
            })()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <MessageArea />
      </div>
    );
  }
}

AccordionList.propTypes = {
  fetchWords: func,
  category: string,
  verbs: array,
  adjectives: array,
  nouns: array,
};

export default connect(
  state => ({
    words: state.words,
    verbs: verbSelector(state),
    nouns: nounSelector(state),
    adjectives: adjectiveSelector(state),
  }),
  { fetchWords },
)(AccordionList);

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
import { MyImage, MyHeader, MyGridList, MyGridListTile, MyExpansionPanel } from './AccordionList';
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

  changeIcon(category) {
    switch (category) {
      case 'Nouns':
        return 'https://cdn.pixabay.com/photo/2014/11/25/21/04/package-545658_960_720.png';
      case 'Verbs':
        return 'https://cdn.pixabay.com/photo/2014/03/24/17/16/stick-man-295293_960_720.png';
      case 'Adjectives':
        return 'https://cdn.pixabay.com/photo/2016/04/24/05/52/heart-1348869_960_720.png';
      default:
        return null;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <MyExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={this.changeColor(this.props.category)}>
            <MyImage src={this.changeIcon(this.props.category)} alt="category icon" />
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
        </MyExpansionPanel>
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

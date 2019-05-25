import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { PropTypes } from 'prop-types';
import { Center, HOV } from './CardStyles';
import withSpeech from '../../HOC/withSpeech.jsx';
import { getWord } from '../../store/actions';

const useStyles = makeStyles({
  card: {
    maxWidth: 100,
    maxHeight: 140,
    background: 'white',
    margin: '10px',
  },
  icon: {
    fontSize: '26px',
    position: 'absolute',
    right: '5px',
    bottom: '23px',
  },
  pad: {
    padding: '16px 5px',
  },
});

const ImgMediaCard = props => {
  const classes = useStyles();
  console.log(props)
  const readWord = word => {
    props.read(word);
  };

  return (
    <Card className={classes.card} onClick={() => props.getWord(props.word)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.word.name}
          height="90px"
          image={props.word.image}
          title={props.word.name}
        />
        <HOV>
          <Icon className={classes.icon} onClick={() => readWord(props.text)}>
            volume_up
          </Icon>
        </HOV>
        <Center>
          <CardContent className={classes.pad}>
            <Typography component="h2">{props.word.name}</Typography>
          </CardContent>
        </Center>
      </CardActionArea>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  word: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default connect(
  null,
  { getWord },
)(withSpeech(ImgMediaCard));

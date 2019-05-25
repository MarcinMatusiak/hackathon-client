import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { PropTypes } from 'prop-types';
import { Center, HOV } from './CardStyles';

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

  return (
    <Card className={classes.card} onClick={() => console.log(props.text)}>
      <CardActionArea>
        <CardMedia component="img" alt={props.text} height="90px" image={props.link} title={props.text} />
        <HOV>
          <Icon className={classes.icon} onClick={() => console.log('muzyczka')}>
            volume_up
          </Icon>
        </HOV>
        <Center>
          <CardContent className={classes.pad}>
            <Typography component="h2">{props.text}</Typography>
          </CardContent>
        </Center>
      </CardActionArea>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

export default ImgMediaCard;

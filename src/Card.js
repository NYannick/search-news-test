import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 500,
    margin: '0 auto',
    display: 'block',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
};

const SimpleMediaCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.urlToImageCard}
          title={props.titleCard}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.titleCard}
          </Typography>
          <Typography component="p">
            {props.descriptionCard}
          </Typography>
          <Typography component="p">
            {props.publishedAtCard} - {props.authorCard}
          </Typography>
        </CardContent>
      </Card>
    </div>
    );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);

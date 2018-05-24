import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/fr';

const styles = {
  card: {
    maxWidth: 500,
    margin: '0 auto',
    display: 'block',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  subtext: {
    color: '#757575',
  }
};

const SimpleMediaCard = (props) => {
  const { classes } = props;
  moment.locale('fr');
  const publishedAtCard = moment(props.publishedAtCard).format('LL');
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
          <Typography component="p" className={classes.subtext}>
            {publishedAtCard} - {props.authorCard}
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

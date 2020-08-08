import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './place.css';

//components
import CardHead from './CardHead';
import ImageCard from './ImageCard';
import Description from './Description';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Report from './Report';

//redux
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
//icons
import ChatIcon from '@material-ui/icons/Chat';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = {
  card: {
    marginTop: '5px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: 'green',
  },
  placeHeading: {
    height: '50px',
    maxHeight: '50px',
    overflow: 'auto',
    padding: '10px 20px 0 20px',
    borderLeft: '1px dotted lightgrey',
    borderRight: '1px dotted lightgrey',
    borderBottom: '1px solid lightgrey',
  },
  action: {
    borderLeft: '1px dotted lightgrey',
    borderRight: '1px dotted lightgrey',
    borderBottom: '1px solid lightgrey',
  },
  dropdownContent: {
    display: 'flex',
    flexDirection: 'column',
  },
};

class Place extends React.Component {
  render() {
    const {
      classes,
      place: {
        body,
        catagory,
        description,
        placeImgUrl,
        address,
        userHandle,
        placeId,
        createdAt,
        userImage,
        likeCount,
        commentCount,
        viewCount,
      },
    } = this.props;

    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        spacing={2}
        className={classes.card}
      >
        {placeImgUrl && (
          <ImageCard
            placeImgUrl={placeImgUrl}
            imgHeight="250px"
            body={body}
            placeId={placeId}
            catagory={catagory}
            userHandle={userHandle}
            userImage={userImage}
            viewCount={viewCount}
          />
        )}
        <Link to={`/place/${placeId}`}>
          <Typography className={classes.placeHeading} variant="subtitle1">
            {body}
          </Typography>
        </Link>

        <CardActions disableSpacing className={classes.action}>
          <LikeButton placeId={placeId} />
          {likeCount}
          <Link to={`/place/${placeId}`}>
            <IconButton aria-label="share">
              <ChatIcon />
            </IconButton>
          </Link>
          {commentCount}
          <SaveButton placeId={placeId} />
          <div className={classes.expand}>
            <Report placeId={placeId} />
          </div>
        </CardActions>
      </Grid>
    );
  }
}

Place.propTypes = {
  user: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Place));

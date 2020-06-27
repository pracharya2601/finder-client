import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './place.css';

import DeletePlace from './DeletePlace';
import { connect } from 'react-redux';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import withStyles from '@material-ui/core/styles/withStyles';

//mui
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

//icons
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {};

class CardHead extends React.Component {
  render() {
    dayjs.extend(relativeTime);

    const {
      classes,
      userHandle,
      userImage,
      body,
      placeId,
      address,
      createdAt,
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const header = `${body} [${address}]`;
    const optionBtn =
      authenticated && userHandle === handle ? (
        <div className={classes.dropdownContent}>
          <DeletePlace placeId={placeId} />
          <DeletePlace placeId={placeId} />
        </div>
      ) : null;

    const shareBtn = (
      <div className={classes.dropdownContent}>
        <Button color="primary">Share</Button>
      </div>
    );

    return (
      <CardHeader
        avatar={
          <Avatar
            aria-label="place_body"
            component={Link}
            to={`/user/${userHandle}`}
            alt={userHandle}
            src={userImage}
            className={classes.avatar}
          />
        }
        action={
          <div aria-label="settings" className="dropDown">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <div className="dropdown-content">
              {optionBtn}
              {shareBtn}
            </div>
          </div>
        }
        title={header}
        subheader={dayjs(createdAt).fromNow()}
      />
    );
  }
}

CardHead.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  userHandle: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  placeId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(CardHead));

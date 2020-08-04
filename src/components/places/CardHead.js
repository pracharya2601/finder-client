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
      deleteBtn,
      address,
      createdAt,
      // handleClick,
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;
    const header = `${body} [${address}]`;
    const optionBtn =
      authenticated && userHandle === handle && deleteBtn === true ? (
        <div className={classes.dropdownContent}>
          <DeletePlace
            placeId={placeId}
            // handleClick={handleClick}
          />
        </div>
      ) : null;

    return (
      <CardHeader
        avatar={
          <Avatar
            aria-label="place_body"
            component={Link}
            to={`/user/profile/${userHandle}`}
            alt={userHandle}
            src={userImage}
            className={classes.avatar}
          />
        }
        action={
          <div aria-label="settings" className="dropDown">
            {optionBtn}
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
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(CardHead));

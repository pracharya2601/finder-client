import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import withStyles from '@material-ui/core/styles/withStyles';
//mui
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

//icons
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {};

class Comments extends React.Component {
  render() {
    const { comments, classes } = this.props;
    console.log(comments);
    dayjs.extend(relativeTime);

    const singleComment = comments.map((comment) => {
      const { commentId, body, createdAt, userImage, userHandle } = comment;

      return (
        <div key={commentId}>
          <Divider />
          <CardHeader
            key={createdAt}
            avatar={
              <Avatar
                arial-label=""
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
              </div>
            }
            title={body}
            subheader={dayjs(createdAt).fromNow()}
          />
        </div>
      );
    });

    return singleComment;
  }
}

Comments.propTypes = {};

export default withStyles(styles)(Comments);

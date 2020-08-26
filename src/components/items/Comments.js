import React from 'react';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import withStyles from '@material-ui/core/styles/withStyles';
//mui
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const styles = {};

class Comments extends React.Component {
  render() {
    dayjs.extend(relativeTime);
    const { classes, comment } = this.props;
    const commentMarkup = comment ? (
      <CardHeader
        avatar={
          <Avatar
            arial-labe=""
            component={Link}
            to={`/user/profile/${comment.userHandle}`}
            alt={comment.userHandle}
            src={comment.userImage}
            className={classes.avatar}
          />
        }
        title={comment.body}
        subheader={dayjs(comment.createdAt).fromNow()}
      />
    ) : null;
    return <>{commentMarkup}</>;
  }
}

Comments.propTypes = {};

export default withStyles(styles)(Comments);

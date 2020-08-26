import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

//mui
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

//icons
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import Tooltip from '@material-ui/core/Tooltip';

//redux

import { connect } from 'react-redux';
import { markNotificationsRead } from '../../redux/actions/userAction';

class Notifications extends React.Component {
  state = {
    anchorEl: null,
  };

  handleOpen = (event) => {
    this.setState({
      anchorEl: event.target,
    });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openMenuOpened = () => {
    let unreadNotificationId = this.props.notifications
      .filter((not) => !not.read)
      .map((not) => not.notificationId);

    this.props.markNotificationsRead(unreadNotificationId);
  };

  render() {
    dayjs.extend(relativeTime);

    const notifications = this.props.notifications;
    const anchorEl = this.state.anchorEl;

    let notificationIcon;
    if (notifications && notifications.length > 0) {
      let noti = notifications.filter((not) => not.read === false).length;
      noti > 0
        ? (notificationIcon = (
            <Badge badgeContent={noti} color="secondary">
              <NotificationsActiveIcon />
            </Badge>
          ))
        : (notificationIcon = <NotificationsActiveIcon />);
    } else {
      notificationIcon = <NotificationsActiveIcon />;
    }
    //notification markup
    let notificationMarkup =
      notifications && notifications.length > 0 ? (
        notifications.map((not) => {
          const verb = not.type === 'like' ? 'liked' : 'commented on';
          const time = dayjs(not.createdAt).fromNow();
          const iconColor = not.red ? 'primary' : 'secondary';

          const icon =
            not.type === 'like' ? (
              <StarIcon color={iconColor} style={{ marginRight: 10 }} />
            ) : (
              <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
            );
          const userHandle = not.sender;
          return (
            <MenuItem key={not.createdAt} onClick={this.handleClose}>
              {icon}
              <Typography
                component={Link}
                variant="body1"
                to={`/user/profile/${userHandle}`}
              >
                {not.sender} {verb} your post {time}
              </Typography>
            </MenuItem>
          );
        })
      ) : (
        <MenuItem onClick={this.handleClose}>No notification yet</MenuItem>
      );

    return (
      <>
        <Tooltip title="Notification">
          <IconButton
            aria-owns={anchorEl ? 'simple-menu' : 'undefine'}
            aria-haspopup="true"
            onClick={this.handleOpen}
            color="inherit"
          >
            {notificationIcon}
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onEntered={this.openMenuOpened}
        >
          {notificationMarkup}
        </Menu>
      </>
    );
  }
}
Notifications.propTypes = {
  markNotificationsRead: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  notifications: state.user.notifications,
});

export default connect(mapStateToProps, { markNotificationsRead })(
  Notifications
);

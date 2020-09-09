import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

//mui
import CardContent from '@material-ui/core/CardContent';

//icon
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkIcon from '@material-ui/icons/Link';

const styles = {
  content: {
    margin: '10px 15% 0 15%',
    display: 'flex',
    flexDirection: 'column',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 5px 0',
  },
};

const DetailContent = (props) => {
  const { classes, location, contactNo, email, website } = props;

  return (
    <CardContent className={classes.content}>
      {location && (
        <div className={classes.userItem}>
          <MyLocationIcon />
          <span>{location}</span>
        </div>
      )}
      {contactNo && (
        <div className={classes.userItem}>
          <PhoneIcon />
          <span>{contactNo}</span>
        </div>
      )}
      <div className={classes.userItem}>
        <MailIcon />
        <span>{email}</span>
      </div>
      {website && (
        <a
          className={classes.userItem}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon />
          <span className={classes.userItem}>{website}</span>
        </a>
      )}
    </CardContent>
  );
};

export default withStyles(styles)(DetailContent);

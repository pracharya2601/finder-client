import React, { Component, Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

//component
import Fullname from './Fullname';
import CreatedAt from './CreatedAt';
import DetailContent from './DetailContent';

//MUI
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    minWidth: '345px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: 20,
    alignItem: 'center',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageProfile: {
    height: '150px',
    width: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
};

const StaticProfile = (props) => {
  const { classes, profile } = props;

  const staticMarkup =
    profile === null ? (
      <p>loading</p>
    ) : (
      <Card className={classes.card}>
        <CardContent className={classes.cardHeader}>
          <Avatar
            alt={profile.handle}
            src={profile.imageUrl}
            className={classes.imageProfile}
          />
          <Fullname fullName={profile.fullName} handle={profile.handle} />
          {profile.bio && <div className={classes.userItem}>{profile.bio}</div>}
          <CreatedAt createdAt={profile.createdAt} />
        </CardContent>
        <Divider />
        <DetailContent
          location={profile.location}
          contactNo={profile.contactNo}
          email={profile.email}
          website={profile.website}
        />
      </Card>
    );

  return staticMarkup;
};

export default withStyles(styles)(StaticProfile);

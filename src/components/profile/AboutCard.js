import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import find from '../../images/find.jpg';
import mountain from '../../images/mounteverest.png';
import Fullname from '../profile/Fullname';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  imageProfile: {
    height: '150px',
    width: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  icon: {
    padding: '5px 10px 5px 10px',
  },
  wechatid: {
    display: 'none',
  },
  iconwechat: {
    padding: '5px 10px 5px 10px',
    '&:hover': {
      wechatid: {
        display: 'block',
      },
    },
  },
  author: {
    display: 'flex',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const AboutCard = (props) => {
  const classes = useStyles();
  const {
    name,
    position,
    email,
    linkedin,
    github,
    pra,
    sul,
    asi,
    ank,
    company,
    wechat,
    image,
  } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardHeader}>
          {image && (
            <Avatar alt="image" src={image} className={classes.imageProfile} />
          )}
          <Fullname fullName={name} />
          <div>{position}</div>
          <div style={{ display: 'flex' }}>
            <a className={classes.icon} href={linkedin} target="_/blank">
              <LinkedInIcon />
            </a>

            <a
              className={classes.icon}
              href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
              target="_/blank"
            >
              <EmailIcon />
            </a>
            {github && (
              <a className={classes.icon} href={github} target="_/blank">
                <GitHubIcon />
              </a>
            )}
            {wechat && (
              <a className={classes.icon} href="#" target="_/blank">
                <ChatBubbleIcon />
              </a>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>{company}</div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AboutCard;

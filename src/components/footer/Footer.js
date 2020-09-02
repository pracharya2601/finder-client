import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Term from '../../term';
import ContactForm from '../ContactForm';

import Icon from '../../images/iconn.png';

//material ui
import Avatar from '@material-ui/core/Avatar';

function Copyright() {
  return (
    <>
      <Typography
        variant="body2"
        style={{ textAlign: 'center', color: 'white' }}
      >
        {'Copyright © '}
        <Link href="https://www.easypezy.com" style={{ color: 'red' }}>
          EasyPezy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <div
        style={{
          fontSize: '9px',
          width: '100%',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        <Term color="white" size="small" />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#424fc2',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    position: 'absolute',
    buttom: '0',
    left: '0',
    width: '100%',
  },
  companyName: {
    position: 'relative',
  },
  avtr: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    border: '1px solid white',
    padding: '5px',
    background: 'white',
  },
  footGrid: {
    display: 'flex',
    lineHeight: '30px',
  },
  footGridRight: {
    // display: 'relative',
  },
  textBtn: {
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      color: '#faf2c8',
      textDecoration: 'underline',
    },
  },
}));

const description = 'Follow us on';
const title = 'EasyPezy';

const Footer = (props) => {
  const classes = useStyles();

  const btnStyle = {
    margin: '2px 0 2px 5px',
  };

  const icons = (
    <>
      <a
        href="https://www.facebook.com/EasyPezy-105270137972745"
        target="_/blank"
      >
        <Button
          variant="contained"
          size="small"
          color="default"
          className={classes.button}
          startIcon={<FacebookIcon />}
          style={btnStyle}
        >
          Facebook
        </Button>
      </a>
      <a href="https://www.instagram.com/easypezyinc/" target="_/blank">
        <Button
          variant="contained"
          size="small"
          color="default"
          className={classes.button}
          startIcon={<InstagramIcon />}
          style={btnStyle}
        >
          Instagram
        </Button>
      </a>
    </>
  );

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} className={classes.footGrid}>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.companyName}>
                <Avatar alt="logo" src={Icon} className={classes.avtr} />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: '10px 0 0 50px',
                    color: 'white',
                  }}
                >
                  {title}
                </div>
              </Grid>
              <Grid item xs={12}>
                <ContactForm />
              </Grid>
              <Grid item xs={12}>
                <Link to="/aboutus">
                  <div className={classes.textBtn}>About Us</div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.footGridRight}>
            <Typography style={{ float: 'right' }}>
              {description} {icons}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Icon from '../../images/iconn.png';

//material ui
import Avatar from '@material-ui/core/Avatar';

function Copyright() {
  return (
    <Typography variant="body2" style={{ textAlign: 'center', color: 'white' }}>
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.easypezy.com"
        style={{ color: 'red' }}
      >
        EasyPezy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
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
}));

const description = 'Follow us here';
const title = 'EasyPezy';

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} className={classes.footGrid}>
            <Avatar alt="logo" src={Icon} className={classes.avtr} />
            <div style={{ margin: '0 0 0 10px', color: 'white' }}>{title}</div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.footGrid}>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              {description}
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

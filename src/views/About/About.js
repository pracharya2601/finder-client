import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import find from '../../images/find.jpg';
import mounteverest from '../../images/mounteverest.png';

import Title from '../../util/Title';
import Navbar from '../../components/Navbar';
import AboutCard from '../../components/profile/AboutCard';
import Footer from '../../components/footer/Footer';

import prakash from '../../images/prakash.JPG';
import sulav from '../../images/sulav.png';
import asim from '../../images/asim.png';
import ankita from '../../images/ankita.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${find})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
  },
  heroEnd: {
    margin: '20px 0 20px 0',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mounteverest})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: 300,
      fontSize: '3em',
    },
    opacity: 0.5,
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <>
      <Title title="About Us Easypezy" />
      <Navbar />
      <section style={{ marginTop: '70px' }}>
        <Box className={classes.hero}>
          <Box>EasyPezy</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Our Team
          </Typography>
          <Grid container spacing={3}>
            <AboutCard
              name="Prakash Acharya"
              position="Fullstack Software Engineer"
              company="Software Engineer/ Instructor at Bigminds Un School"
              linkedin="https://www.linkedin.com/in/prakash-ac/"
              github="https://github.com/pracharya2601"
              email="pracharya2601@gmail.com"
              image={prakash}
            />
            <AboutCard
              name="Sulav Prasai"
              position="Advisor"
              company="CEO/Founder of Guangzhou  Infinity Trading Co. Limited 广州英飞贸易有限公司"
              linkedin="https://www.linkedin.com/in/sulav-prasai/"
              wechat="Sulav2017"
              email="prasaisulav@gmail.com"
              image={sulav}
            />
            <AboutCard
              name="Asim Acharya"
              position="Content Manager"
              company="Student"
              // linkedin="https://www.linkedin.com/in/prakash-ac/"
              // github="https://github.com/pracharya2601"
              email="aacharyaasim880@gmail.com"
              image={asim}
            />
            <AboutCard
              name="Ankita Acharya"
              position="Social Media Manager"
              company="Student"
              // linkedin="https://www.linkedin.com/in/prakash-ac/"
              // github="https://github.com/pracharya2601"
              email="aacharyaankita@gmail.com"
              image={ankita}
            />
          </Grid>
        </Container>
        <Box className={classes.heroEnd}></Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Future Plan
          </Typography>
          <Grid container spacing={3}>
            {/* <AboutCard
            name="Prakash Acharya"
            position="Fullstack Software Engineer"
            linkedin="https://www.linkedin.com/in/prakash-ac/"
            github="https://github.com/pracharya2601"
            email="pracharya2601@gmail.com"
            prakash
          /> */}
            comming soon!!
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default About;

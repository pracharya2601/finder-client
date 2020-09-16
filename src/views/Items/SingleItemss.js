import React from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//navbar
import Navbar from '../../components/Navbar';
//container
import Container from '../../components/container/Container';
//image caurosel
import ImgCarousel from '../../components/carousel/ImgCarousel';

//
import LikeButton from '../../components/items/LikeButton';
import SaveButton from '../../components/items/SaveButton';
import ShareBtns from '../../components/buttons/ShareBtns';
import Comments from '../../components/items/Comments';
import CommentForm from '../../components/items/CommentForm';
import Report from '../../components/items/Report';
import DeleteItem from '../../components/items/DeleteItem';
import Mail from '../../components/items/Mail';
import Markavailability from '../../components/items/Markavailability';

//material Ui
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';

const BORDER_COLOR = 'red';
const HEADING_BG = 'teal';
const TEXT_CL = 'white';

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    // background: 'grey',
    borderRadius: '5px',
    marginTop: '5px',
  },
  heading: {
    display: 'flex',
    lineHeight: '25px',
    fontSize: '23px',
    padding: '10px 5px',
    background: 'red',
  },
  interaction: {
    border: `1px solid ${BORDER_COLOR}`,
    margin: '10px 0 30px 0',
    position: 'relative',
    padding: '20px 5px 5px 5px',
    borderRadius: '5px',
  },
  interactionHeading: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '-20px 0 0 20px ',
    border: `1px solid ${BORDER_COLOR}`,
    padding: '6px 12px 6px 12px',
    borderRadius: '5px',
    background: HEADING_BG,
    color: TEXT_CL,
    display: 'flex',
  },
  icon: {
    color: 'grey',
    marginRight: '5px',
  },
  description: {
    padding: '30px 15px 10px 15px',
    background: 'lightgrey',
    margin: '-10px 0 10px 0',
    borderRadius: '5px',
  },
}));

const SingleItemss = (props) => {
  const classes = useStyles();

  const {
    itemId,
    item,
    itemImgUrl,
    likeCount,
    commentCount,
    catagory,
    name,
    userData,
    available,
    selectApply,
    description,
    pointDescription,
    nearbyPlace,
    priceRange,
    viewCount,
  } = data;

  return (
    <>
      <Navbar />
      <Container direction="left">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.heading}>
              <InfoIcon className={classes.icon} /> {''}
              {name}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <ImgCarousel itemImgUrl={itemImgUrl} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} className={classes.infoContainer}>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>People Interaction</h4>
              <LikeButton itemId={itemId} />
              {likeCount} Interested
              <IconButton aria-label="share">
                <ChatIcon />
              </IconButton>
              {commentCount} Comments
            </div>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>Features</h4>
              <div style={{ padding: '0 10px 10px 10px' }}>
                {_.map(selectApply, (feature) => (
                  <Chip
                    label={feature}
                    key={feature}
                    style={{ margin: '1px' }}
                  />
                ))}
              </div>
            </div>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>Nearby Places</h4>
              <div style={{ padding: '0 10px 10px 10px' }}>
                {_.map(nearbyPlace, (place) => (
                  <Chip label={place} key={place} style={{ margin: '1px' }} />
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.description}>
              <div className={classes.mainDesc}>{description}</div>
              <ul className={classes.pointDesc}>
                {_.map(pointDescription, (desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>
                Additional Information
              </h4>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{catagory}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Amount</TableCell>
                    <TableCell>Rs. {priceRange}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>No.of People Interested</TableCell>
                    <TableCell> {likeCount}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>No. of Views</TableCell>
                    <TableCell> {viewCount}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ margin: '10px 0 0 0' }}>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>Owner Action</h4>
              <DeleteItem itemId={itemId} del />
              <Markavailability itemId={itemId} available={available} />
              <MenuItem component={Link} to={`/item/edit/${itemId}`}>
                Edit
              </MenuItem>
            </div>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>Your Action</h4>
              <SaveButton itemId={itemId} />
              <Report itemId={itemId} />
              <Mail
                itemId={itemId}
                catagory={catagory}
                item={name}
                userData={userData}
              />
              <ShareBtns itemId={itemId} item={item} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleItemss;

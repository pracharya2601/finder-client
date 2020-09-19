import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//import Icons
import land from '../../images/icons/land.svg';
import floor from '../../images/icons/floor.svg';
import livingroom from '../../images/icons/livingroom.svg';
import bathroom from '../../images/icons/bathroom.svg';

//navbar
import Navbar from '../Navbar';
//footer
import Footer from '../footer/Footer';
//container
import Container from '../container/Container';
//image caurosel
import ImgCarousel from '../carousel/ImgCarousel';
import ShareBtns from '../buttons/ShareBtns';

//
import LikeButton from './LikeButton';
import IconContainer from './IconContainer';
import SaveButton from './SaveButton';
import Comments from './Comments';
import CommentForm from './CommentForm';
import Report from './Report';
import DeleteItem from './DeleteItem';
import Mail from './Mail';
import Markavailability from './Markavailability';

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
import BathtubIcon from '@material-ui/icons/Bathtub';

import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MapIcon from '@material-ui/icons/Map';

const BORDER_COLOR = '#cfd8ff';
const HEADING_BG = '#4b62c9';
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
    background: 'lightgrey',
    borderRadius: '5px',
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
  realstatePart: {
    display: 'flex',
    margin: 'auto',
  },
  icon: {
    color: 'teal',
    marginRight: '5px',
  },
  description: {
    padding: '10px 15px 10px 15px',
    background: 'lightgrey',
    margin: '-10px 0 10px 0',
    borderRadius: '5px',
    fontSize: '14px',
  },
  contact: {
    padding: '10px 15px 10px 15px',
    background: 'lightgrey',
    margin: '-10px 0 10px 0',
    borderRadius: '5px',
    display: 'flex',
    lineHeight: '30px',
    fontSize: '14px',
  },
  commentSection: {
    background: 'lightgrey',
    margin: '10px 0 30px 0',
    position: 'relative',
    padding: '20px 5px 5px 5px',
    borderRadius: '5px',
  },
}));

const SingleItemRender = (props) => {
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
    hasPrice,
    showNum,
    contactNo,
    address,
    realstate,
    comments,
    isOwner,
  } = props;
  console.log(comments);

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
            {itemImgUrl && <ImgCarousel itemImgUrl={itemImgUrl} />}
          </Grid>
          <Grid item xs={12} sm={12} md={5} className={classes.infoContainer}>
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>People Interaction</h4>
              {itemId && <LikeButton itemId={itemId} />}
              {likeCount} Interested
              <IconButton aria-label="share">
                <ChatIcon />
              </IconButton>
              {commentCount} Comments
            </div>
            {selectApply && (
              <div className={classes.interaction}>
                <h4 className={classes.interactionHeading}>Features</h4>
                <div style={{ padding: '0 10px 10px 10px' }}>
                  {_.map(selectApply, (feature, index) => (
                    <Chip
                      label={feature}
                      key={index}
                      style={{ margin: '1px' }}
                    />
                  ))}
                </div>
              </div>
            )}
            {nearbyPlace && (
              <div className={classes.interaction}>
                <h4 className={classes.interactionHeading}>Nearby Places</h4>
                <div style={{ padding: '0 10px 10px 10px' }}>
                  {_.map(nearbyPlace, (place) => (
                    <Chip label={place} key={place} style={{ margin: '1px' }} />
                  ))}
                </div>
              </div>
            )}
            {realstate && (
              <div className={classes.realstatePart}>
                <IconContainer icon={livingroom} value={realstate.livingroom} />
                <IconContainer icon={bathroom} value={realstate.bathroom} />
                <IconContainer icon={floor} value={realstate.floor} />
                <IconContainer icon={land} value={realstate.area} />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <div className={classes.description}>
              <h3>Description:</h3>
              <div className={classes.mainDesc}>{description}</div>
              <ul className={classes.pointDesc}>
                {_.map(pointDescription, (desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </Grid>
          {showNum && (
            <Grid item xs={12}>
              <div className={classes.contact}>
                <ContactPhoneIcon style={{ margin: '2px 10px 0 0' }} /> Contact:{' '}
                <a href={`tel:${contactNo}`} target="_/blank">
                  {' '}
                  {contactNo}
                </a>
              </div>
            </Grid>
          )}
          {address && (
            <Grid item xs={12}>
              <div className={classes.contact}>
                <MapIcon style={{ margin: '2px 10px 0 0' }} />
                {address.address} {address.city}, {address.district}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${
                    address.address
                  }${' '}${address.city}`}
                  target="_/blank"
                  style={{ marginLeft: 'auto', width: '80px' }}
                >
                  &#9758; Map
                </a>
              </div>
            </Grid>
          )}
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
                  {hasPrice && (
                    <TableRow>
                      <TableCell>Price</TableCell>
                      <TableCell>Rs. {priceRange}</TableCell>
                    </TableRow>
                  )}
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
          <Grid item xs={12} sm={9} md={6} style={{ margin: '10px 0 0 0' }}>
            {isOwner && (
              <div className={classes.interaction}>
                <h4 className={classes.interactionHeading}>Owner Action</h4>
                <DeleteItem itemId={itemId} del />
                <Markavailability itemId={itemId} available={available} />
                <MenuItem component={Link} to={`/item/edit/${itemId}`}>
                  Edit
                </MenuItem>
              </div>
            )}
            <div className={classes.interaction}>
              <h4 className={classes.interactionHeading}>Your Action</h4>
              <SaveButton itemId={itemId} />
              <Report itemId={itemId} />
              {userData && (
                <Mail
                  itemId={itemId}
                  catagory={catagory}
                  item={name}
                  userData={userData}
                />
              )}
              <ShareBtns itemId={itemId} item={item} />
            </div>
            <div className={classes.commentSection}>
              <h4 className={classes.interactionHeading}>Comment Section</h4>
              <CommentForm itemId={itemId} />
              {_.map(comments, (comment, index) => (
                <Comments comment={comment} key={index} />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}></Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SingleItemRender;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardHead from '../../components/places/CardHead';
import LikeButton from '../../components/places/LikeButton';
import SaveButton from '../../components/places/SaveButton';
import Comments from '../../components/places/Comments';
import CommentForm from '../../components/places/CommentForm';
import Report from '../../components/places/Report';
import ImgCarousel from '../../components/carousel/ImgCarousel';

import Loading from '../../components/loading/Loading';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Typography from '@material-ui/core/Typography';

//icon
import InfoIcon from '@material-ui/icons/Info';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import RateReviewIcon from '@material-ui/icons/RateReview';

import IconButton from '@material-ui/core/IconButton';
import PaymentIcon from '@material-ui/icons/Payment';

import ChatIcon from '@material-ui/icons/Chat';

//icon
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ContactsIcon from '@material-ui/icons/Contacts';
//redux
import { connect } from 'react-redux';
import { getPlace, clearErrors } from '../../redux/actions/dataAction';

const styles = {
  loadingComponent: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    marginTop: '5px',
    padding: '5px 20px 20px 20px',
    backgroundCorlo: 'green',
  },
  aboutHeading: {
    display: 'flex',
    marginTop: '15px',
  },
  space: {
    marginLeft: '5px',
  },
  priceTable: {
    backgroundColor: '#e3dec3',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: 'green',
  },
};

class SinglePlace extends React.Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.getPlace(this.props.match.params.placeId);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      classes,
      place: {
        address,
        placeId,
        body,
        comments,
        contactNo,
        catagory,
        createdAt,
        description,
        likeCount,
        commentCount,
        placeImgUrl,
        priceRange,
        userHandle,
        userImage,
        viewCount,
      },
      UI: { loading },
    } = this.props;

    const singleComment = comments
      ? comments.map((comment) => (
          <Comments comment={comment} key={comment.createdAt} />
        ))
      : null;
    const commentForm = <CommentForm placeId={placeId} />;

    const commentSection = (
      <Card className={classes.card}>
        <div className={classes.aboutHeading}>
          <RateReviewIcon />
          <Typography variant="subtitle1" className={classes.space}>
            Comment Section
          </Typography>
        </div>
        {commentForm}
        <Divider />
        {singleComment}
      </Card>
    );

    const markupContent = loading ? (
      <div className={classes.loadingComponent}>
        <Loading />
      </div>
    ) : (
      <>
        {placeImgUrl && <ImgCarousel placeImgUrl={placeImgUrl} />}
        {/* <CardHead
          userHandle={userHandle}
          deleteBtn
          editBtn
          userImage={userImage}
          body={body}
          address={address}
          placeId={placeId}
          createdAt={createdAt}
          className={classes.header}
        /> */}
        <Card className={classes.card}>
          <div>
            <LikeButton placeId={placeId} />
            {likeCount}
            <IconButton aria-label="share">
              <ChatIcon />
            </IconButton>
            {commentCount}
            <SaveButton placeId={placeId} />
            <Report placeId={placeId} iconOnly />
          </div>
          <Divider />
          <div className={classes.aboutHeading}>
            <InfoIcon />
            <Typography variant="subtitle1" className={classes.space}>
              Place Info
            </Typography>
          </div>
          <Typography color="textSecondary">{body}</Typography>
          <div className={classes.aboutHeading}>
            <DescriptionTwoToneIcon />
            <Typography variant="subtitle1" className={classes.space}>
              Description
            </Typography>
          </div>
          <Typography color="textSecondary">{description}</Typography>

          <div className={classes.aboutHeading}>
            <InfoTwoToneIcon />
            <Typography variant="subtitle1" className={classes.space}>
              Additional Info
            </Typography>
          </div>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{catagory}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell className={classes.priceTable}>
                  Rs. {priceRange}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No.of People Interested</TableCell>
                <TableCell> {likeCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No. of Views</TableCell>
                <TableCell> {viewCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell> {address}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div className={classes.aboutHeading}>
            <ContactsIcon />
            <Typography variant="subtitle1" className={classes.space}>
              Contact Info
            </Typography>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Phone number</TableCell>
                <TableCell> {contactNo}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Card>
        {commentSection}
      </>
    );

    return <Container maxWidth="md">{markupContent}</Container>;
  }
}

SinglePlace.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getPlace: PropTypes.func.isRequired,
  placeId: PropTypes.string,
  // place: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  place: state.data.place,
  UI: state.UI,
});

export default connect(mapStateToProps, { getPlace, clearErrors })(
  withStyles(styles)(SinglePlace)
);

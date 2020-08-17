import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import history from '../../history';

import CardHead from './CardHead';
import ImageCard from './ImageCard';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Comments from './Comments';
import CommentForm from './CommentForm';
import Report from './Report';

import Loading from '../loading/Loading';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PaymentIcon from '@material-ui/icons/Payment';
import Card from '@material-ui/core/Card';
import ChatIcon from '@material-ui/icons/Chat';

//icon
import CancelIcon from '@material-ui/icons/Cancel';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ContactsIcon from '@material-ui/icons/Contacts';
//redux
import { connect } from 'react-redux';
import { getPlace, clearErrors } from '../../redux/actions/dataAction';
import ImgCarousel from '../carousel/ImgCarousel';

const styles = {
  loadingComponent: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    marginTop: '10px',
    margin: 'auto',
    maxHeight: '100%',
  },
  description: {
    padding: '10px',
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
      <div className={classes.card}>
        <CardHead
          userHandle={userHandle}
          deleteBtn
          editBtn
          userImage={userImage}
          body={body}
          address={address}
          placeId={placeId}
          createdAt={createdAt}
          className={classes.header}
        />
        {placeImgUrl && <ImgCarousel placeImgUrl={placeImgUrl} />}

        <CardActions disableSpacing>
          <LikeButton placeId={placeId} />
          {likeCount}
          <IconButton aria-label="share">
            <ChatIcon />
          </IconButton>
          {commentCount}
          <SaveButton placeId={placeId} />
          <div className={classes.expand}>
            <Report placeId={placeId} iconOnly />
          </div>
        </CardActions>

        <Card className={classes.card}>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.description}
          >
            Description:
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Card>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <PaymentIcon />
          </IconButton>
          EST. Amount: {priceRange}
          <IconButton
            className={classes.expand}
            component={Link}
            to={`/user/profile/${userHandle}`}
          >
            <ContactsIcon />
          </IconButton>
          Contact
        </CardActions>
        {commentSection}
      </div>
    );

    return <div>{markupContent}</div>;
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

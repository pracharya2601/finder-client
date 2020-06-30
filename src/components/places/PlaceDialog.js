import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardHead from './CardHead';
import ImageCard from './ImageCard';
import Description from './Description';
import LikeButton from './LikeButton';
import Comments from './Comments';
import CommentForm from './CommentForm';

import Loading from '../loading/Loading';

import withStyles from '@material-ui/core/styles/withStyles';

import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';

//icon
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
import DialogContentText from '@material-ui/core/DialogContentText';
//redux
import { connect } from 'react-redux';
import { getPlace, clearErrors } from '../../redux/actions/dataAction';

const styles = {
  loadingComponent: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    marginTop: '10px',
    margin: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: 'green',
  },
};

class PlaceDialog extends React.Component {
  state = {
    open: false,
    oldPath: '',
    newPath: '',
    scroll: 'body',
  };
  componentDidMount() {
    if (this.props.openDialog) {
      this.handleClickOpen();
    }
    if (this.props.openForComment) {
      this.handleClickOpen();
    }
  }
  handleClickOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, placeId } = this.props;
    const newPath = `/place/${placeId}`;

    if (oldPath === newPath) oldPath = `/users/profile/${userHandle}`;

    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getPlace(this.props.placeId);
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      classes,
      place: {
        placeId,
        body,
        description,
        placeImgUrl,
        address,
        contactNo,
        userHandle,
        createdAt,
        userImage,
        likeCount,
        commentCount,
        viewCount,
        priceRange,
        comments,
      },
      UI: { loading },
    } = this.props;

    const markupContent = loading ? (
      <div className={classes.loadingComponent}>
        <Loading />
      </div>
    ) : (
      <Card className={classes.card}>
        <DialogTitle id="scroll-dialog-title">
          <CardHead
            userHandle={userHandle}
            userImage={userImage}
            body={body}
            address={address}
            placeId={placeId}
            createdAt={createdAt}
          />
        </DialogTitle>
        <DialogContent>
          <ImageCard placeImgUrl={placeImgUrl} body={body} />
          <Description description={description} />
          <CardActions disableSpacing>
            <LikeButton placeId={placeId} />
            {likeCount}
            <span className={classes.expand}>Est.Price: {priceRange}</span>
          </CardActions>
          <CommentForm placeId={placeId} />
          <Comments comments={comments} />
        </DialogContent>
      </Card>
    );

    return (
      <div>
        <VisibilityIcon onClick={this.handleClickOpen}></VisibilityIcon>
        <Dialog
          fullWidth
          maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          className={classes.dialogBox}
        >
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <CancelIcon />
            </Button>
          </DialogActions>
          {markupContent}
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}

PlaceDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getPlace: PropTypes.func.isRequired,
  placeId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  place: state.data.place,
  UI: state.UI,
});

export default connect(mapStateToProps, { getPlace, clearErrors })(
  withStyles(styles)(PlaceDialog)
);

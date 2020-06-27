import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardHead from './CardHead';
import ImageCard from './ImageCard';
import Description from './Description';
import LikeButton from './LikeButton';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import withStyles from '@material-ui/core/styles/withStyles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

//icon
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
//redux
import { connect } from 'react-redux';
import { getPlace } from '../../redux/actions/dataAction';

const styles = {};

class PlaceDialog extends React.Component {
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.getPlace(this.props.placeId);
  };

  handleClose = () => {
    this.setState({ open: false });
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
      },
      UI: { loading },
    } = this.props;
    console.log(this.props);

    const markupContent = loading ? (
      <p>Loading....</p>
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
        <DialogContent className={classes.dialogContent}>
          <ImageCard placeImgUrl={placeImgUrl} body={body} />
        </DialogContent>
      </Card>
    );

    return (
      <React.Fragment>
        <VisibilityIcon onClick={this.handleClickOpen}></VisibilityIcon>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          scroll="paper"
        >
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <CancelIcon />
            </Button>
          </DialogActions>
          {markupContent}
        </Dialog>
      </React.Fragment>
    );
  }
}

PlaceDialog.propTypes = {
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

export default connect(mapStateToProps, { getPlace })(
  withStyles(styles)(PlaceDialog)
);

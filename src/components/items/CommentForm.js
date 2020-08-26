import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { submitComment } from '../../redux/actions/dataAction';

//mui
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const styles = {
  formcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  formField: {
    width: '90%',
    maxWidth: '800px',
    marginTop: '10px',
  },
  button: {
    marginTop: '10px',
    marginBottom: '10px',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: '4%',
  },
  progess: {
    position: 'absolute',
    color: 'white',
  },
};

class CommentForm extends React.Component {
  state = {
    body: '',
    errors: {},
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '' });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { body } = this.state;
    this.props.submitComment(this.props.itemId, { body: body });
  };

  render() {
    const {
      classes,
      authenticated,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    const btnMarkup = authenticated ? (
      <Button
        type="submit"
        varient="contained"
        color="primary"
        className={classes.button}
      >
        Submit
        {loading && <CircularProgress size={30} className={classes.progess} />}
      </Button>
    ) : (
      <Button
        varient="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to={'/login'}
      >
        Go to Login
      </Button>
    );

    const commentFormMarkup = (
      <form
        className={classes.formcontainer}
        noValidate
        onSubmit={this.handleSubmit}
      >
        <TextField
          name="body"
          type="text"
          label="Add your comment"
          helperText={errors.comment}
          error={errors.comment ? true : false}
          value={this.state.body}
          onChange={this.handleChange}
          fullWidth
          className={classes.formField}
        />
        {btnMarkup}
      </form>
    );

    return commentFormMarkup;
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  itemId: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { submitComment })(
  withStyles(styles)(CommentForm)
);

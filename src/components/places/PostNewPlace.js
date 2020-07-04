import React from 'react';
import { Field, reduxForm } from 'redux-form';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { postPlace } from '../../redux/actions/dataAction';

const styles = {
  titlePost: {
    textAlign: 'center',
  },
  postContainer: {
    width: '80%',
    margin: 'auto',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    maxWidth: '400px',
  },
  button: {
    marginTop: '20px',
    width: '130px',
    position: 'relative',
  },
  progess: {
    position: 'absolute',
    color: 'white',
  },
};

class PostNewPlace extends React.Component {
  renderField = ({
    input,
    label,
    rows,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <>
        <TextField
          {...input}
          {...custom}
          label={label}
          rows={rows}
          fullWidth
          multiline
          error={touched && error ? true : false}
        />
      </>
    );
  };
  renderSelectField = ({
    input,
    label,
    children,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...input}
          error={touched && error ? true : false}
          fullWidth
          {...custom}
        >
          {children}
        </Select>
      </FormControl>
    );
  };

  onSubmit = (values) => {
    this.props.postPlace(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const {
      handleSubmit,
      reset,
      classes,
      loading,
      user: { authenticated },
    } = this.props;

    const postMarkup = authenticated ? (
      <div className={classes.postContainer}>
        <Typography variant="h5" className={classes.titlePost}>
          Post New Stuff
        </Typography>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="catagory"
            component={this.renderSelectField}
            label="Catagory"
          >
            <MenuItem value={''}>Select Catagory</MenuItem>
            <MenuItem value={'rental'}>For Rental</MenuItem>
            <MenuItem value={'sale'}> For Sale</MenuItem>
            <MenuItem value={'other'}>Other Catagory</MenuItem>
          </Field>
          <Field
            name="body"
            component={this.renderField}
            label="Main heading for your place"
            rows="1"
          />
          <Field
            name="description"
            component={this.renderField}
            label="Description of your Place"
            rows="3"
          />
          <Field
            name="priceRange"
            component={this.renderField}
            label="Estimated Price Range"
            rows="1"
          />
          <Field
            name="address"
            component={this.renderField}
            label="Location of your Place"
            rows="1"
          />
          <Field
            name="contactNo"
            component={this.renderField}
            label="Add your contact Info"
            rows="1"
          />
          <div className={classes.btnContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Post
              {loading.loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
            </Button>
            <Button
              type="button"
              variant="contained"
              className={classes.button}
              onClick={reset}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    ) : null;

    return postMarkup;
  }
}

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'catagory',
    'body',
    'description',
    'priceRange',
    'address',
    'contactNo',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const mapStateToProps = (state) => ({
  loading: state.UI,
  user: state.user,
});

export default reduxForm({
  form: 'PostNewForm',
  validate,
})(connect(mapStateToProps, { postPlace })(withStyles(styles)(PostNewPlace)));

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import uniqid from 'uniqid';

import { storage } from '../../base';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilepondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilepondPluginImagePreview,
  FilePondPluginFileValidateType
);

const styles = {
  titlePost: {
    textAlign: 'center',
  },
  postContainer: {
    width: '80%',
    maxWidth: '550px',
    margin: 'auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '30px 30px 30px 30px',
    borderRadius: '5px',
    backgroundColor: '#CACAD7',
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
  fileDrop: {
    marginTop: '15px',
  },
  progess: {
    position: 'absolute',
    color: 'white',
  },
};

class PlaceForm extends React.Component {
  state = {
    placeId: '',
    files: [],
    error: '',
  };

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

  newPlacewithImgDocument = (form, id, imageName) => {
    const images = imageName.map(
      (file) =>
        `https://firebasestorage.googleapis.com/v0/b/cocoontechlab.appspot.com/o/places%2F${id}%2F${file.name.replace(
          / /g,
          ''
        )}?alt=media`
    );
    return {
      ...form,
      placeImgUrl: images,
      placeId: id,
    };
  };

  onSubmit = (values) => {
    let id = this.props.id;
    this.setState({ id: id });
    if (this.state.files.length > 0) {
      this.submitImage(id);
      const newPlace = this.newPlacewithImgDocument(
        values,
        id,
        this.state.files
      );
      this.props.onSubmit(newPlace);
    } else {
      this.setState({ error: 'Please Add Image to Continue' });
    }
  };

  submitImage = (id) => {
    for (var i = 0; i < this.state.files.length; i++) {
      let file = this.state.files[i];
      const storageRef = storage.ref(
        `places/${id}/${file.name.replace(/ /g, '')}`
      );
      storageRef.put(file);
    }
  };

  clearForm = () => {
    this.props.reset();
    this.setState({ files: [], error: '' });
  };

  render() {
    const { handleSubmit, classes, header, id, resetBtn, addImg } = this.props;
    const imgLabel = !addImg
      ? `Drag & Drop your images or <span class="filepond--label-action">Browse</span>`
      : `<div>Add Image To Update</div> Drag & Drop your images or <span class="filepond--label-action">Browse</span>`;
    const postMarkup = (
      <div className={classes.postContainer}>
        <Typography variant="h5" className={classes.titlePost}>
          {header}
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
          {this.state.error && (
            <div
              style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}
            >
              {this.state.error}
            </div>
          )}
          <FilePond
            className={classes.fileDrop}
            files={this.state.files}
            allowMultiple={true}
            maxFiles={6}
            allowFileTypeValidation={true}
            acceptedFileTypes={['image/*']}
            labelIdle={imgLabel}
            onupdatefiles={(fileItem) => {
              this.setState({
                files: fileItem.map(({ file }) => {
                  return file;
                }),
              });
            }}
          />
          <div className={classes.btnContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Post
              {/* {loading.loading && (
                <CircularProgress size={30} className={classes.progess} />
              )} */}
            </Button>
            {resetBtn && (
              <Button
                type="button"
                variant="contained"
                className={classes.button}
                onClick={this.clearForm}
              >
                Clear
              </Button>
            )}
          </div>
        </form>
      </div>
    );

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
    'placeImgUrl',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default reduxForm({
  form: 'placeForm',
  enableReinitialize: true,
  validate,
})(withStyles(styles)(PlaceForm));

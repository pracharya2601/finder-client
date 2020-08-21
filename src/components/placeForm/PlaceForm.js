import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import uniqid from 'uniqid';

import { storage } from '../../base';

import selectApply from '../../util/postRoomData';

//formfield
import RenderField from '../form/RenderField';
import RenderSelectField from '../form/RenderSelectField';
import MultiSelectField from '../form/MultiSelectField';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//material icon
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

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
    margin: '0 0 20px 0',
  },
  formBox: {
    marginTop: '10px',
  },
  postContainer: {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '30px 20px 20px 20px',
    backgroundColor: '#fffff2',
    borderRadius: '5px',
  },
  iconBtn: {
    float: 'right',
    position: 'relative',
    top: '52px',
    right: '5px',
    zIndex: '1000',
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

class PlaceForm extends React.Component {
  state = {
    placeId: '',
    files: [],
    error: '',
    errorForm: '',
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
      if (Object.keys(values).length !== 0) {
        this.submitImage(id);
        const newPlace = this.newPlacewithImgDocument(
          values,
          id,
          this.state.files
        );
        this.props.onSubmit(newPlace);
        console.log(newPlace);
      } else {
        window.scrollTo(0, 0);
        this.setState({ errorForm: 'Fillout all the form' });
      }
    } else {
      console.log(values);
      this.setState({ error: 'Add Image to submit' });
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
    this.setState({ files: [], error: '', errorForm: '' });
    window.scrollTo(0, 0);
  };

  renderField = ({ fields, meta: { error } }) => (
    <div style={{ textAlign: 'center' }}>
      {fields.map((nearbyPlace, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <div key={index} style={{ marginTop: '-40px' }}>
            <IconButton
              type="button"
              title="Remove Hobby"
              onClick={() => fields.remove(index)}
              className={this.props.classes.iconBtn}
            >
              <CancelIcon size="large" />
            </IconButton>
            <Field
              name={nearbyPlace}
              type="text"
              component={RenderField}
              label={`Nearby place- ${index + 1}`}
              placeholder="Add School, Hospital or Any recognize place"
              outlined="outlined"
            />
          </div>
        </Grid>
      ))}
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          type="button"
          onClick={() => fields.push()}
          style={{ marginTop: '5px' }}
        >
          Add nearby place
        </Button>
      </Grid>
    </div>
  );

  render() {
    const {
      handleSubmit,
      classes,
      header,
      id,
      resetBtn,
      addImg,
      loading,
    } = this.props;
    const imgLabel = !addImg
      ? `Drag & Drop your images or <span class="filepond--label-action">Browse</span>`
      : `<div>Add Image To Update</div> Drag & Drop your images or <span class="filepond--label-action">Browse</span>`;
    const postMarkup = (
      <div className={classes.postContainer}>
        <Typography variant="h5" className={classes.titlePost}>
          {header}
        </Typography>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Grid container spacing={2}>
            <Grid item xm={12} md={3} />
            <Grid item xs={12} sm={6}>
              {this.state.errorForm && (
                <div
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    marginTop: '10px',
                  }}
                >
                  {this.state.errorForm}
                </div>
              )}
              <Field
                name="catagory"
                component={RenderSelectField}
                label="Catagory"
              >
                <MenuItem value={''}>Select Catagory</MenuItem>
                <MenuItem value={'rental'}>For Rental</MenuItem>
                <MenuItem value={'sale'}> For Sale</MenuItem>
                <MenuItem value={'other'}>Other Catagory</MenuItem>
              </Field>
            </Grid>
            <Grid item xm={12} md={3} />
            <Grid item xs={12} sm={6}>
              <Field
                name="body"
                type="text"
                component={RenderField}
                outlined="outlined"
                label="Heading For your place"
                placeholder="Eg: Room for rent, House for sale"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="description"
                type="text"
                multiline
                component={RenderField}
                outlined="outlined"
                label="Description of your Place"
                placeholder="Tell us what's great about the your listed item, property and area"
                rows="3"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="priceRange"
                type="number"
                component={RenderField}
                outlined="outlined"
                label="Estimated Price Range"
                placeholder="Give a Price in Number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="contactNo"
                type="number"
                component={RenderField}
                outlined="outlined"
                label="Contact"
                placeholder="Add your contact Info"
              />
            </Grid>
            <Grid item xs={9} sm={4} md={4} lg={4}>
              <Field
                name="address.areaName"
                type="text"
                component={RenderField}
                outlined="outlined"
                label="Address"
                placeholder="Location"
              />
            </Grid>
            <Grid item xs={3} sm={2} md={2} lg={2}>
              <Field
                name="address.wardNo"
                type="number"
                component={RenderField}
                outlined="outlined"
                label="Ward"
                placeholder="Ward No. "
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="address.city"
                type="text"
                component={RenderField}
                outlined="outlined"
                label="City"
                placeholder="Municipality or VDC"
              />
            </Grid>
            <Grid item xs={7} sm={3} md={4} lg={4}>
              <Field
                name="address.district"
                type="text"
                component={RenderField}
                outlined="outlined"
                label="District"
                placeholder="District name"
              />
            </Grid>
            <Grid item xs={5} sm={3} md={2} lg={2}>
              <Field
                name="address.zone"
                type="text"
                component={RenderField}
                outlined="outlined"
                label="State"
                placeholder="Zone or State"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="selectApply"
                component={MultiSelectField}
                label="Select that apply"
                data={selectApply}
              />
            </Grid>
            <Grid item xs={12}>
              <FieldArray name="nearbyPlace" component={this.renderField} />
            </Grid>
            {this.state.error && (
              <div
                style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}
              >
                {this.state.error}
              </div>
            )}
            <Grid item xs={12} sm={6} className={classes.imgPrev}>
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
            </Grid>
            <Grid item xs={12}>
              <div className={classes.btnContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Post
                  {loading && (
                    <CircularProgress size={30} className={classes.progess} />
                  )}
                </Button>
                {resetBtn && (
                  <Button
                    color="secondary"
                    type="button"
                    variant="contained"
                    className={classes.button}
                    onClick={this.clearForm}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
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
    'nearbyPlace',
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

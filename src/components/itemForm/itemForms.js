import React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { states, districts } from '../../util/address';
import { cities } from '../../util/cities';

import { storage } from '../../base';
import selectApply from '../../util/postRoomData';

import {
  rentalTypes,
  saleTypes,
  otherTypes,
  jobTypes,
} from '../../util/postUtils/itemTypes';

//formfield
import RenderField from '../form/RenderField';
import RenderSelectField from '../form/RenderSelectField';
import MultiSelectField from '../form/MultiSelectField';
import AutoCompleteForm from '../form/AutoCompleteForm';
import CheckboxInput from '../form/CheckboxInput';

import RenderRadioBtn from '../form/RenderRadioBtn';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  topGrid: {
    marginTop: '0',
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
  warning: {
    padding: '7px 5px',
    color: '#9e912e',
    fontSize: '12px',
    marginTop: '-20px',
  },
  multipleWarning: {
    padding: '7px 5px',
    color: '#9e912e',
    fontSize: '12px',
    marginTop: '-5px',
  },
  labelTop: {
    padding: '7px 5px',
    color: '#403f39',
  },
};

class ItemForms extends React.Component {
  state = {
    itemId: '',
    files: [],
    error: '',
    errorForm: '',
  };

  newItemwithImgDocument = (form, id, imageName, catagory) => {
    const images = imageName.map(
      (file) =>
        `https://firebasestorage.googleapis.com/v0/b/easypezy-39664.appspot.com/o/items%2F${id}%2F${file.name.replace(
          / /g,
          ''
        )}?alt=media`
    );
    return {
      ...form,
      itemImgUrl: images,
      itemId: id,
      catagory: catagory,
    };
  };

  onSubmit = (values) => {
    let { id, catagory } = this.props;
    this.setState({ id: id });
    if (this.state.files.length > 0) {
      if (Object.keys(values).length !== 0) {
        // this.submitImage(id);
        const newItem = this.newItemwithImgDocument(
          values,
          id,
          this.state.files,
          catagory
        );
        // setTimeout(this.props.onSubmit(newItem), 2000);
        console.log(newItem);
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
        `items/${id}/${file.name.replace(/ /g, '')}`
      );
      storageRef.put(file);
    }
  };

  clearForm = () => {
    this.props.reset();
    this.setState({ files: [], error: '', errorForm: '' });
    window.scrollTo(0, 0);
  };

  renderField = ({ fields, label, meta: { error } }) => (
    <div style={{ textAlign: 'center' }}>
      {fields.map((item, index) => (
        <div key={index} style={{ marginTop: '-40px' }}>
          <IconButton
            type="button"
            title="Remove Item"
            onClick={() => fields.remove(index)}
            className={this.props.classes.iconBtn}
          >
            <CancelIcon size="large" />
          </IconButton>
          <Field
            name={item}
            type="text"
            component={RenderField}
            label={`${label} - ${index + 1}`}
            placeholder=""
            outlined="outlined"
          />
        </div>
      ))}
      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        type="button"
        onClick={() => fields.push()}
        style={{ marginTop: '5px' }}
      >
        Add {label}
      </Button>
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
      catagory,
      isRealstate,
      hasPriceValue,
    } = this.props;
    const types =
      catagory == 'rental'
        ? rentalTypes
        : catagory == 'sale'
        ? saleTypes
        : catagory == 'other'
        ? otherTypes
        : catagory == 'job'
        ? jobTypes
        : undefined;

    const form = (name, type, component, label, placeholder) => {
      return (
        <Field
          name={name}
          type={type}
          component={component}
          outlined="outlined"
          label={label}
          placeholder={placeholder}
        />
      );
    };
    const checkForm = (name, component, label) => {
      return <Field name={name} component={component} label={label} />;
    };

    const imgLabel = !addImg
      ? `Drag & Drop your images or <span class="filepond--label-action">Browse</span>`
      : `<div>Add Image To Update</div> Drag & Drop your images or <span class="filepond--label-action">Browse</span>`;
    const postMarkup = (
      <div className={classes.postContainer}>
        <Typography variant="h5" className={classes.titlePost}>
          {header}
        </Typography>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="type"
                component={RenderRadioBtn}
                radioValue={types}
                type="Select Type"
              />
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              {isRealstate &&
                form('realstate.bedroom', 'number', RenderField, 'Bedroom', '')}
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              {isRealstate &&
                form(
                  'realstate.bathroom',
                  'number',
                  RenderField,
                  'Bathroom',
                  ''
                )}
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              {isRealstate &&
                form('realstate.floor', 'number', RenderField, 'Floors', '')}
            </Grid>
            <Grid item xs={4} sm={3} md={2}>
              {isRealstate &&
                form('realstate.floor', 'number', RenderField, 'Area', '')}
            </Grid>
            {isRealstate && (
              <Grid item xs={12}>
                <div className={classes.warning}> &#9888; Mention number</div>{' '}
              </Grid>
            )}

            <Grid item xs={12} sm={6} className={classes.topGrid}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {form('name', 'text', RenderField, 'Short Catchy Name', '')}
                </Grid>

                <Grid item xs={12}>
                  {checkForm(
                    'hasPrice',
                    CheckboxInput,
                    'Mention Price! (Recommended)'
                  )}
                </Grid>
                <Grid item xs={7}>
                  {hasPriceValue &&
                    form('priceRange', 'number', RenderField, 'Price', '')}
                </Grid>
                <Grid item xs={5}>
                  {hasPriceValue &&
                    checkForm('negotiable', CheckboxInput, 'negotiable')}
                </Grid>
                <Grid item xs={7}>
                  {form('contactNo', 'tel', RenderField, 'Phone Number', '')}
                </Grid>
                <Grid item xs={5}>
                  {checkForm('showNum', CheckboxInput, 'Show number')}
                </Grid>
                <Grid item xs={12}>
                  {form('address.address', 'text', RenderField, 'Address', '')}
                </Grid>
                <Grid item xs={7}>
                  {form(
                    'address.city',
                    'text',
                    RenderField,
                    'City',
                    'Municipality or VDC"'
                  )}
                </Grid>
                <Grid item xs={5}>
                  {form(
                    'address.district',
                    'text',
                    RenderField,
                    'District',
                    '"'
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.topGrid}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="description"
                    type="text"
                    multiline
                    component={RenderField}
                    outlined="outlined"
                    label="Short Description"
                    placeholder=""
                    rows="3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FieldArray
                    name="pointDescription"
                    label="Point Description"
                    component={this.renderField}
                  />
                </Grid>
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                  <>
                    <Field
                      name="selectApply"
                      component={MultiSelectField}
                      label="Select that apply"
                      data={selectApply}
                    />
                    <div className={classes.multipleWarning}>
                      {' '}
                      &#9888; Select or create option (type word and press
                      enter)
                    </div>
                  </>
                </Grid>
                <Grid item xs={12}>
                  <FieldArray
                    name="nearbyPlace"
                    label="Nearby Places"
                    component={this.renderField}
                  />
                </Grid>
              </Grid>
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
    'name',
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

ItemForms = reduxForm({
  form: 'itemForm', // a unique identifier for this form
})(ItemForms);

const selector = formValueSelector('itemForm');
ItemForms = connect((state) => {
  const hasPriceValue = selector(state, 'hasPrice');
  const isRealstate = selector(state, 'type') === 'realstate' ? true : false;
  return {
    hasPriceValue,
    isRealstate,
  };
})(ItemForms);

// export default reduxForm({
//   form: 'itemForm',
//   enableReinitialize: true,
//   validate,
// })(withStyles(styles)(ItemForms));

export default withStyles(styles)(ItemForms);

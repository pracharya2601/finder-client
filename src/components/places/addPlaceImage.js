import React from 'react';
import { storage } from '../../base';
import _, { each } from 'lodash';

//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilepondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilepondPluginImagePreview);

class AddPlaceImage extends React.Component {
  state = {
    files: [],
  };

  submitImage = () => {
    this.state.files.forEach((file) => {
      // const storageRef = storage.ref(`places/${file.name}`);
      // storageRef.put(file);
      console.log(file);
    });
    this.setState({ files: [] });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.clickMe(this.props);
    this.submitImage();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <FilePond
          files={this.state.files}
          allowMultiple={true}
          maxFiles={4}
          onupdatefiles={(fileItem) => {
            this.setState({
              files: fileItem.map(({ file }) => {
                const imageFileName =
                  Math.round(Math.random() * 10000000000) +
                  Math.round(Math.random() * 10000000000);
                const renamedFile = new File(
                  [file],
                  `${imageFileName}${file.name}`,
                  {
                    type: file.type,
                  }
                );
                return renamedFile;
              }),
            });
          }}
        />
        <button onClick={this.handleSubmit}>click me</button>
      </>
    );
  }
}

export default AddPlaceImage;

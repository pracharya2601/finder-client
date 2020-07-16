import React from 'react';
import { storage } from '../../base';
import _, { each } from 'lodash';

class addPlaceImage extends React.Component {
  state = {
    fileUrl: [],
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  onFileChange = async (event) => {
    const imageFileName = Math.round(Math.random() * 10000000000);
    const files = event.target.files;
    const filesList = [];
    const eachFile = _.map(files, (file) => {
      const renamedFile = new File([file], `${imageFileName}${file.name}`, {
        type: file.type,
      });
      const storageRef = storage.ref(`places/${renamedFile.name}`);
      storageRef.put(file);
      const url = `https://firebasestorage.googleapis.com/v0/b/cocoontechlab.appspot.com/o/places%2F${renamedFile.name}?alt=media`;

      return url;
    });
    filesList.push(eachFile);
    this.setState({ fileUrl: filesList });
  };

  render() {
    console.log(this.state.fileUrl);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="file" onChange={this.onFileChange} multiple />
        </form>
      </div>
    );
  }
}

export default addPlaceImage;

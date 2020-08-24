import React from 'react';
import TitleComponent from './TitleComponent';
const withTitle = (Component, title) => {
  class Title extends Component {
    render() {
      return (
        <React.Fragment>
          <TitleComponent title={title} />
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  }
  return Title;
};

export default withTitle;

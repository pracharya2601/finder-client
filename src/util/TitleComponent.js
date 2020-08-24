import React from 'react';
import Helmet from 'react-helmet';

//material ui
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';

const TitleComponent = (props) => {
  const {
    title,
    place,
    user: {
      credentials: { fullName },
    },
  } = props;
  var defaultTitle = 'EasyPezy';

  const titleFunction = (title) => {
    if (title === 'singleplace' || title === 'edit') return place;
    if (title === 'user') return fullName;
    if (title === 'saved') return `Saved Items ${fullName}`;
    return title;
  };

  return (
    <Helmet>
      <title>{title ? titleFunction(title) : defaultTitle}</title>
    </Helmet>
  );
};

const mapStateToProps = (state) => ({
  place: state.data.place.body,
  user: state.user,
});

export default connect(mapStateToProps, {})(TitleComponent);

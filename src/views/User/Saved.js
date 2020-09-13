import React from 'react';
import _ from 'lodash';

//import title
import withTitle from '../../util/withTitle';
//navbar
import Navbar from '../../components/Navbar';
import Container from '../../components/container/Container';

import { connect } from 'react-redux';
import { getItems, clearErrors } from '../../redux/actions/dataAction';
import Page from '../../components/page/Page';

class Saved extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {
      data: { items },
      user: { saved, authenticated },
    } = this.props;

    const filtered = Object.keys(items)
      .filter((key) => Object.keys(_.mapKeys(saved, 'itemId')).includes(key))
      .reduce((obj, key) => {
        obj[key] = items[key];
        return obj;
      }, {});

    console.log(filtered);

    const savedMarkup = _.isEmpty(filtered) ? (
      <div>You dont have any saved Item</div>
    ) : (
      <Page items={filtered} pageName="My Saved Items" />
    );
    return (
      <>
        <Navbar />
        <Container direction="right">
          {authenticated && <>{savedMarkup}</>}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

const title = 'saved';

export default connect(mapStateToProps, { getItems, clearErrors })(
  withTitle(Saved, title)
);

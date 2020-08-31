import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 75;

class Menus extends React.Component {
  state = {
    anchorEl: null,
  };

  handleOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { children } = this.props;
    const anchorEl = this.state.anchorEl;

    return (
      <>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : 'undefine'}
          aria-haspopup="true"
          onClick={this.handleOpen}
          color="inherit"
          size="small"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {children}
        </Menu>
      </>
    );
  }
}

export default Menus;

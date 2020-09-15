import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LoyaltyIcon from '@material-ui/icons/Loyalty';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CategoryIcon from '@material-ui/icons/Category';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
  addlist: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  addBtn: {
    background: '#adbdff',
    color: 'blue',
    // padding: '5px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#adbdff',
      color: 'white',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddItem(props) {
  const classes = useStyles();
  const [openDialog, setDpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setDpenDialog(true);
  };

  const handleClose = () => {
    setDpenDialog(false);
  };

  return (
    <div>
      {props.icon ? (
        <Tooltip title="Post a item">
          <IconButton
            variant="outlined"
            onClick={handleClickOpen}
            style={{ boxSizing: 'bprder-box' }}
          >
            <AddIcon className={classes.addBtn} />
          </IconButton>
        </Tooltip>
      ) : (
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>Post New</ListItemText>
        </ListItem>
      )}

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Post New
          <Button
            onClick={handleClose}
            color="primary"
            style={{ float: 'right' }}
          >
            Cancel
          </Button>
        </DialogTitle>
        <DialogContent className={classes.addlist}>
          <DialogContentText>
            Please select catagoty to add new Item
          </DialogContentText>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<RecentActorsIcon />}
            component={Link}
            to={`/postitem/rental`}
            onClick={handleClose}
          >
            Rental
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<LoyaltyIcon />}
            component={Link}
            to={`/postitem/sale`}
            onClick={handleClose}
          >
            For Sale
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CategoryIcon />}
            component={Link}
            to={`/postitem/other`}
            onClick={handleClose}
          >
            Other Catagory
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<WorkIcon />}
            component={Link}
            to={`/postitem/job`}
            onClick={handleClose}
          >
            Job Posting
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

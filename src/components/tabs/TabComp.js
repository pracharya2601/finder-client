import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Item from '../items/Item';

import Container from '../container/Container';
import Grid from '@material-ui/core/Grid';

import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabComp = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { availableItem, unavailableItem, savedItem } = props;

  const itemMarkupFunc = (items) => {
    return items.map((item) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemId}>
        <Item item={item} />
      </Grid>
    ));
  };

  console.log(availableItem);

  const availableMarkup = availableItem ? itemMarkupFunc(availableItem) : null;
  const unavailableMarkup = unavailableItem
    ? itemMarkupFunc(unavailableItem)
    : null;
  const savedMarkup = savedItem ? null : null;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Past Post" {...a11yProps(0)} />
          <Tab label="Available Post" {...a11yProps(1)} />
          {savedItem && <Tab label="Saved" {...a11yProps(1)} />}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container direction="up">
          <Grid container spacing={2}>
            {unavailableMarkup}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container direction="up">
          <Grid container spacing={2}>
            {availableMarkup}
          </Grid>
        </Container>
      </TabPanel>
      {savedItem && (
        <TabPanel value={value} index={2}>
          <Container>
            <Grid container spacing={2}>
              {savedMarkup}
            </Grid>
          </Container>
        </TabPanel>
      )}
    </div>
  );
};

export default TabComp;

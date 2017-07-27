import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Onsen Weather' navigator={navigator} />}>
    <div>
      <Paper style={style} zDepth={1} />
      <Paper style={style} zDepth={2} />
      <Paper style={style} zDepth={3} />
      <Paper style={style} zDepth={4} />
      <Paper style={style} zDepth={5} />
    </div>
  </Page>
);

export default MainPage;

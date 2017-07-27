import React from 'react';
import ReactDom from 'react-dom'
import { MenuItem, Drawer, RaisedButton, AppBar} from 'material-ui'
import { Link } from 'react-router-dom'
import { browserHistory } from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {Divider, BottomNavigation, BottomNavigationItem} from 'material-ui';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openDrawer : false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle() {
    this.setState({openDrawer : true})
  }

  handleClose(page) {
    this.setState({openDrawer : false})
  }

  render() {
    return (
      <div>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={{ bottom: 0, position: 'absolute', display: 'inline-table' }}>
          <Divider />
          <div style={{clear : 'both'}}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </div>
        </BottomNavigation>
    </div>
    )
  }

}

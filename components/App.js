import React from 'react';
import ReactDom from 'react-dom'
import { Paper, MenuItem, Drawer, RaisedButton, AppBar} from 'material-ui'
import { Link } from 'react-router-dom'
import { browserHistory } from 'react-router'


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
      <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap = {this.handleToggle}/>

      <Drawer width='100%'
        docked={false}
        open={this.state.openDrawer}
        onRequestChange={(open) => this.setState({open})}
      >
        <Link to="/"><MenuItem onTouchTap={() => this.handleClose('/')}>Home</MenuItem></Link>
        <Link to="/SignUp"><MenuItem onTouchTap={() => this.handleClose('/about')}>Sign Up</MenuItem></Link>
      </Drawer>
    </div>
    )
  }

}

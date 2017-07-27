import React from 'react'
import ReactDom from 'react-dom'
import { MenuItem, Drawer, RaisedButton, AppBar} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import HomePage from './components/HomePage.js'
import App from './components/App.js'
import Footer from './components/Footer.js'
import SignUpPage from './components/Auth/SignUpPage.js'

import { BrowserRouter, Route } from 'react-router-dom'

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme(
    {
      // spacing: spacing,
      fontFamily: 'Roboto, sans-serif',
      palette: {
        primary1Color: '#2F3E7A',
        primary2Color: 'cyan700',
        primary3Color: grey400,
        accent1Color: '#CD2C24',
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        // clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
      }
    }
  )}>

  <BrowserRouter>
    <div>
      <App/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/SignUp" component={SignUpPage}/>
        <Footer/>
    </div>
  </BrowserRouter>

  </MuiThemeProvider>), document.getElementById('root')
)

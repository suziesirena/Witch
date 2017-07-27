import Base from './Base.js';
import HomePage from './HomePage.js';
// import App from './components/App.js';
// import Dashboard from './components/Dashboard/Dashboard';
// import About from './components/About'
// import TagEditor from './components/TagEditor/TagEditor'
// import Edit from './components/Item/Edit'
// import Test from './components/Test/Test'
// import LoginPage from './containers/LoginPage.js';
// import SignUpPage from './containers/SignUpPage.js';
// import ValidateMailPage from './containers/ValidateMailPage.js';
// // import UploadZone from './components/Item/UploadZone';
// import Friends from './components/User/Friends';
// import Profile from './components/User/Profile';
// import Init from './modules/Init'
//
// import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        // if (Auth.isUserAuthenticated()) {
          // Init.loadProjects()
          callback(null, HomePage)
        // } else { callback(null, HomePage) }
      }
    },
    { path: '/HomePage',         component: HomePage }
    // { path: '/signup',        component: SignUpPage },
    // { path: '/profile',       component: Profile },
    // { path: '/validateMail',  component: ValidateMailPage },
    // { path: '/dashboard',     component: Dashboard },
    // { path: '/About',         component: About },
    // { path: '/Test',          component: Test },
    // { path: '/Edit',          component: Edit },
    // { path: '/Friends',       component: Friends },
    // { path: '/tagEditor',     component: TagEditor },
    // { path: '/UploadZone',    component: UploadZone },
    // { path: '/logout',    onEnter: (nextState, replace) => { Auth.deauthenticateUser(); replace('/'); } }

  ]
};

export default routes

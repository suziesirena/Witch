import App from './components/App.js';



const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        // if (Auth.isUserAuthenticated()) {
          // Init.loadProjects()
          callback(null, App)
        // } else { callback(null, LoginPage) }
      }
    },
    { path: '/App',         component: App },


  ]
};

export default routes

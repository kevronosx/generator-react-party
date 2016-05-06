import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// Layouts
import AppLayout from 'components/layout/app-layout';
// Pages
import Index from 'components/pages/index';
import About from 'components/pages/about';
import Contact from 'components/pages/contact';
import NoMatch from 'components/pages/no-match';

const MainRouter = (
  <Router history={hashHistory}>
    <Route component={AppLayout}>

      <Route path="/">
        <IndexRoute component={Index} />
      </Route>
    
      <Route path="/about">
        <IndexRoute component={About} />
      </Route>
      
      <Route path="/contact">
        <IndexRoute component={Contact} />
      </Route>

      <Route path="*">
        <IndexRoute component={NoMatch} />
      </Route>

    </Route>
  </Router>
);

export default MainRouter;

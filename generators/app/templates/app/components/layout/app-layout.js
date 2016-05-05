import React from 'react'
import { Router, Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AppLayout = React.createClass({
  render() {
    var path = this.props.location.pathname;
    var segment = path.split('/')[1] || 'root';
    return (
      <div>
        <nav>
          <h1>App</h1>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
        <main>
         <ReactCSSTransitionGroup  
            component="div"
            transitionName="page-transition"
            transitionEnterTimeout={400} 
            transitionLeaveTimeout={400}>
            {React.cloneElement(this.props.children, { 
              key: path
            })}
          </ReactCSSTransitionGroup>
        </main>
      </div>
    );
  }
});

export default AppLayout;


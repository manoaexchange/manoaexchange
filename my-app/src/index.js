import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Landing from './landing';
import Userpage from './userpage';
import Adminpage from './adminpage';
import Makeoffer from './makeoffer';
import Loginpage from './loginpage';
import Notifyadmin from './notifyadmin';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/makeoffer">Make offer</Link>
          </li>
          <li>
            <Link to="/login">Login here</Link>
          </li>
          <li>
            <Link to="/notify">Report an issue</Link>
          </li>
        </ul>

        <Route  exact path="/" component={Landing} />
        <Route path="/users" component={Userpage} />
        <Route path="/admin" component={Adminpage} />
        <Route path="/makeoffer" component={Makeoffer} />
        <Route path="/login" component={Loginpage} />
        <Route path="/notify" component={Notifyadmin} />
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
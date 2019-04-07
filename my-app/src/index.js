import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Landing from './landing'
import Userpage from './userpage'
import Adminhome from './adminhome'
import Makeoffer from './makeoffer'
import Loginpage from './loginpage'
import Notfound from './notfound'
import Userhome from './userhome';

const routing = (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/users" component={Userpage} />
        <Route path="/admin" component={Adminhome} />
        <Route path="/adminhome" component={Adminhome} />
        <Route path="/userhome" component={Userhome} />
        <Route path="/makeoffer" component={Makeoffer} />
        <Route path="/login" component={Loginpage} />
        <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
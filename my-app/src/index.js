import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Landing from './landing'
import Userpage from './userpage'
import Adminpage from './adminpage'
import Makeoffer from './makeoffer';
import Loginpage from './loginpage';

const routing = (
    <Router>
      <div>

        <Route exact path="/" component={Landing}/>
        <Route path="/users" component={Userpage}/>
        <Route path="/admin" component={Adminpage}/>
        <Route path="/makeoffer" component={Makeoffer}/>
        <Route path="/login" component={Loginpage}/>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

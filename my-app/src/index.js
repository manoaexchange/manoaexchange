import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Landing from './landing'
import Userpage from './userpage'
import Adminpage from './adminpage'
import Makeoffer from './makeoffer'
import Loginpage from './loginpage'
import Messagepage from './messagepage'
import Notfound from './notfound'

const routing = (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/users" component={Userpage} />
        <Route path="/admin" component={Adminpage} />
        <Route path="/makeoffer" component={Makeoffer} />
        <Route path="/login" component={Loginpage} />
        <Route path="/message" component={Messagepage} />
        <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from '../containers/Login'
import Home from '../containers/Home'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Layout from '../containers/Layout'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)

export default App
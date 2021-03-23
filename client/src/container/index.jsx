import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import routes from '../router'

function Container () {
  return (
    <Router>
      <Switch>
        {
          routes.map(item => {
            return (
              <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
            )
          })
        }
        <Redirect from='*' to='/404' />
      </Switch>
    </Router>
  )
}

export default Container
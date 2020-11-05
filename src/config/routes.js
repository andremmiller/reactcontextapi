import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserForm from '../pages/UserForm'
import UserList from '../pages/UserList'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/userlist" component={UserList} />          
            <Route path="/userform" component={UserForm} />     
        </Switch>
    </Router>
)
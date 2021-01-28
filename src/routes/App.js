import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
import Layout from '../containers/Layout'
import Player from '../containers/Player';

const App = () =>(
    <BrowserRouter>
    <Layout>

    <Switch>

        <Route exact path="/" component={Home}  />
        <Route exact path="/login" component={Login} isLogin/>
        <Route exact path="/register" component={Register} isRegister/>
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} />
    </Switch>
    </Layout>
    
    </BrowserRouter>
)

export default App;
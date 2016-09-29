import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Form} />
                    <Route path='/form' component={Form} />
                    <Route path='/admin' component={Admin} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}
const Home = () => <h1>Tähän lista ilmoittautuneista</h1>
//const Form = () => <Form />
const Admin = () => <h1>Admin kirjautuminen</h1>
const NotFound = () => <h1>404 Page not found</h1>
const Nav = () => (
        <div>
            <Link to='/'>Ilmoittautuneet</Link>&nbsp;
            <Link to='/form'>Ilmoittautuminen</Link>&nbsp;
            <Link to='/admin'>Admin-login</Link>
        </div>
        )
const Container = (props) => (
        <div>
            <Nav />
            {props.children}
        </div>
        )
export default App;
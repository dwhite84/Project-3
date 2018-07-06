import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrPage from './pages/ErrPage/ErrPage';
import NavBar from './components/NavBar/NavBar';
//stupid stuff
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route component={ErrPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
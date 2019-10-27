import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import NotFound from './components/pages/404';
import User from './components/users/user';

import Alert from './components/alerts/alert';
import About from './components/pages/about';
import GithubState from './contexts/github/GithubState';
import AlertState from './contexts/alert/AlertState';

import './App.css';

const App =  () => {



//class component
  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: []
  // }

  // const showUsers = async () =>{
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
  //   setUsers(res.data);
  //   setLoading(false);
  // }

  


    return (
    <GithubState>
    <AlertState>
    <Router>
    <div className="App">
    <Navbar title='Git Finder'/>
    <div className="container">
    <Alert />
    <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' component={User} />
        <Route component = {NotFound} />
    </Switch>
    </div>
    
    </div>
    </Router>
    </AlertState>
    </GithubState>
    );

  
}

export default App;

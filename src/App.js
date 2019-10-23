import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Navbar from './components/navbar/navbar';
import Users from './components/users/users';
import User from './components/users/user';
import Search from './components/search/search';
import Alert from './components/alerts/alert';
import About from './components/pages/about';


import './App.css';

const App =  () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

//class component
  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: []
  // }

  const showUsers = async () =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
    setUsers(res.data);
    setLoading(false);
  }

  const searchUsers = async text =>{
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
    setUsers(res.data.items);
    setLoading(false);
  };

 const getUser = async (username) => {
      setLoading(true);

     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
     setUser(res.data);
     setLoading(false);
  };

 const getUserRepos = async (username) => {
      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
      setRepos(res.data);
      setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null ), 3000)
  };


    return (
    <Router>
    <div className="App">
    <Navbar title='Git Finder'/>
    <div className="container">
    <Alert alert={alert}/>
    <Switch>
      <Route exact path='/' render={props => (
          <Fragment>
            <Search 
              searchUsers={searchUsers} 
              clearUsers={clearUsers} 
              showClear={users.length > 0 ? true : false }
              setAlert={showAlert}/>
            <Users loading={loading} users={users}/>
          </Fragment>
        )}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' render={props => (
          <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
          )}  />
    </Switch>
    </div>
    
    </div>
    </Router>
    );

  
}

export default App;

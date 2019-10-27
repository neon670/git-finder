import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './github.context';
import githubReducer from './githubReducer';
import { 
SEARCH_USERS,
GET_USER,
CLEAR_USERS,
GET_REPOS,
SET_LOADING
 } from '../types';

let githubClientID;
let githubClientSecrect;

if(process.env.NODE_ENV !== 'production'){
	githubClientID = process.env.REACT_APP_GITHUB_ID;
	githubClientSecrect = process.env.REACT_APP_GITHUB_SECRECT;
}else{
	githubClientID = process.env.GITHUB_ID;
	githubClientSecrect = process.env.GITHUB_SECRECT;
}

 const GithubState = props => {
 	const initalState ={
 		users: [],
 		user:{},
 		repos: [],
 		loading: false
 	}
 	const [state, dispatch] = useReducer(githubReducer, initalState);

 	//search user
	const searchUsers = async text =>{
	    setLoading();

	    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecrect}`);

	    
	    dispatch({
	    	type:SEARCH_USERS,
	    	payload: res.data.items
	    });
	  };

	 const getUser = async (username) => {
      setLoading();

     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecrect}`);
     
     dispatch({
     	type: GET_USER,
     	payload: res.data
     })
 	};  


 	 const getUserRepos = async (username) => {
      setLoading();

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRECT}`);
     	dispatch({
     		type: GET_REPOS,
     		payload: res.data
     	})
 	};

	  //clear user
	const clearUsers = () => dispatch({type: CLEAR_USERS});



	//loading
	const setLoading = () => dispatch({type: SET_LOADING});


 	return <githubContext.Provider
 			value={{
 				users:state.users,
 				user: state.user,
 				repos: state.repos,
 				loading: state.loading,
 				searchUsers,
 				clearUsers,
 				getUser,
 				getUserRepos
 			}}
 			>
 			{props.children}
 			</githubContext.Provider>
 }

export default GithubState;
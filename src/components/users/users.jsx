import React, { useContext }from 'react';
import UserItem from './user-items';
import Spinner from '../spinner/spinner';
import propTypes from 'prop-types';
import githubContext from '../../contexts/github/github.context';

  const Users =() =>{
  	const GithubContext = useContext(githubContext);

  	const { loading, users } = githubContext;

 		if(loading){
 			return <Spinner/>;
 		} else{
 			return(
			<div style={userStyle}>
				{GithubContext.users.map(user => (
					<UserItem key={user.id} user={ user } />
				))}
			</div>
		)
 		}

}



const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr',
	gridGap: '1rem'
}

export default Users;
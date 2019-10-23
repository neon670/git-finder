import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './repos-items';

const Repos = ({ repos }) => {
	return(
		repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
	)
}
Repos.PropTypes ={
	repos: PropTypes.array.isRequired
};

export default Repos;
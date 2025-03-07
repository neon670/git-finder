import React, { Fragment, useEffect, useContext }from 'react';
import Spinner from '../spinner/spinner';
import Repos from '../repos/repos';
import githubContext from '../../contexts/github/github.context';


import { Link } from 'react-router-dom';

const User = ({ match }) => {
	const GithubContext = useContext(githubContext);

	const {getUser, loading, user, repos, getUserRepos} = GithubContext;

	useEffect(()=> {
		getUser(match.params.login);
		getUserRepos(match.params.login);
	}, []);

//class component  using lifecycles
	// componentDidMount(){
	// 	this.props.getUser(this.props.match.params.login);
	// 	this.props.getUserRepos(this.props.match.params.login);
	// }
	

		const {
			name,
			company,
			avatar_url,
			location,
			blog,
			login,
			bio,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = user;

		if(loading) return <Spinner/>;

		return(
			<Fragment>
				<Link to='/' className='btn btn-light'>
				Back To Search
				</Link>
				Hireable: {''}
				{hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />) }

				<div className="card grid-2">
					<div className="all-center">
						<img src={avatar_url} className="round-img" alt="" style={{width: '150px'}} />
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (<Fragment> 
									<h3>Bio</h3>
									<p>{bio}</p> 
								</Fragment>)}
						<a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
						<ul>
							<li>
								{login && <Fragment>
											<strong> Username:</strong> {login}
										  </Fragment>}
							</li>
							<li>
								{company && <Fragment>
											<strong> Company:</strong> {company}
										  </Fragment>}
							</li>
							<li>
								{blog && <Fragment>
											<strong> Website:</strong> {blog}
										  </Fragment>}
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center">
					<div className="badge badge-primary">Followers: {followers}</div>
					<div className="badge badge-success">Following: {following}</div>
					<div className="badge badge-light">Public Repos: {public_repos}</div>
					<div className="badge badge-dark">Public Gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		)
	}

export default User;
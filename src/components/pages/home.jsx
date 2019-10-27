import React, { Fragment } from 'react';
import Search from '../search/search';
import Users from '../users/users';


const Home = () => (
	<Fragment>
		<Search />
		<Users />
	</Fragment>
);

export default Home;
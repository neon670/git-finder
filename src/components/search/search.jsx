import React, { useState, useContext } from 'react';
import githubContext from '../../contexts/github/github.context';
import alertContext from '../../contexts/alert/alert.context';

const  Search = () => {

	const GithubContext = useContext(githubContext);
	const AlertContext = useContext(alertContext);

	const [text, setText] = useState('');



	const onSubmit= (e) => {
		e.preventDefault();
		if(text === ''){
			AlertContext.showAlert('Please enter something', 'light')
		} else{
			GithubContext.searchUsers(text);
			setText('');
		}
		
	};
	const onChange = e => {
		setText(e.target.value);
	};

		return(
			<div>
				<form onSubmit={onSubmit} className="form">
					<input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
				{GithubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={GithubContext.clearUsers}> Clear </button> }
				 
				
			</div>
	
		)
}


export default Search;
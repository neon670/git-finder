import React, { useContext } from 'react';
import alertContext from '../../contexts/alert/alert.context';

const Alert = () =>{
	const AlertContext = useContext(alertContext);
	const { alert } = AlertContext;

	return(
		alert!== null &&(
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle"/>{alert.msg}
			</div>
		)
	)
}

export default Alert
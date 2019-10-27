import React, { useReducer } from 'react';
import alertContext from './alert.context';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
const initalState= null;
const [state, dispatch] = useReducer(alertReducer, initalState);


  const showAlert = (msg, type) => {
    dispatch({
    	type: SET_ALERT,
    	payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000)
  };



 	return <alertContext.Provider
 			value={{
 				alert: state,
 				showAlert
 			}}
 			>
 			{props.children}
 			</alertContext.Provider>
 }

export default AlertState;
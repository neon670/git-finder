import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './404.styles';


const NotFound = () => {
	return(
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl='https://i.imgur.com/QIxIKBH.png' />
			<ErrorImageText>Sorry this page is broken</ErrorImageText>
		</ErrorImageOverlay>
	)
};

export default NotFound;
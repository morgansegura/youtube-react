import React from 'react'
// Styled
import Wrapper from '@styled/ErrorMessage'

function ErrorMessage({ error, ...props }) {
	console.log(error)
	return (
		<Wrapper role="alert" {...props}>
			<h2>Oops, something went wrong:</h2>
			<h3 className="message">{error.message}</h3>
		</Wrapper>
	)
}

export default ErrorMessage

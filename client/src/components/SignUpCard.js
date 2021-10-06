import React from 'react'
import Wrapper from '../styled/SignUpCard'
import GoogleAuth from './GoogleAuth'

function SignUpCard({ icon, title, description }) {
	return (
		<Wrapper>
			{icon}
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
				<br />
				<GoogleAuth />
			</div>
		</Wrapper>
	)
}

export default SignUpCard

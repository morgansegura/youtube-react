import React from 'react'
import { GoogleLogin } from 'react-google-login'
// Utils
import { authenticate } from '@utils/api-client'
// Styled
import Button from '@styled/Auth'
// Icons
import { SignInIcon } from '@icons'

function GoogleAuth() {
	return (
		<GoogleLogin
			clientId="651293809546-io531bs54f1dsfof521v2qnvb8haodp8.apps.googleusercontent.com"
			cookiePolicy="single_host_origin"
			onSuccess={authenticate}
			onFailure={authenticate}
			render={renderProps => (
				<Button
					tabIndex={0}
					type="button"
					onClick={renderProps.onClick}
					disabled={renderProps.disabled}>
					<span className="outer">
						<span className="inner">
							<SignInIcon />
						</span>
						sign in
					</span>
				</Button>
			)}
		/>
	)
}

export default GoogleAuth

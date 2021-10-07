import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { AppProviders } from './components'
import App from './App'

ReactDOM.render(
	<AppProviders>
		<App />
	</AppProviders>,
	document.getElementById('root')
)

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styled'
import { darkTheme } from '@styled/theme'

function AppProviders({ children }) {
	return (
		<Router>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</Router>
	)
}

export default AppProviders

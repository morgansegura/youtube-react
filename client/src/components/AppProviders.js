import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
// Context
import { AuthProvider } from '@context/auth-context'
// Styled
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styled'
import { darkTheme } from '@styled/theme'

const config = {
	queries: {
		refetchOnWindowFocus: false,
		retry(failureCount, error) {
			if (error.status === 404) return false
			else if (failureCount < 2) return true
			else return false
		}
	}
}

function AppProviders({ children }) {
	return (
		<ReactQueryConfigProvider config={config}>
			<Router>
				<AuthProvider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyle />
						<ReactQueryDevtools />
						{children}
					</ThemeProvider>
				</AuthProvider>
			</Router>
		</ReactQueryConfigProvider>
	)
}

export default AppProviders

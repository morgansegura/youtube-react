import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import SnackbarProvider from 'react-simple-snackbar'
// Context
import { AuthProvider } from '@context/auth-context'
// Styled
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styled'
import { darkTheme } from '@styled/theme'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@components'

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
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<ReactQueryConfigProvider config={config}>
				<Router>
					<AuthProvider>
						<SnackbarProvider>
							<ThemeProvider theme={darkTheme}>
								<GlobalStyle />
								<ReactQueryDevtools />
								{children}
							</ThemeProvider>
						</SnackbarProvider>
					</AuthProvider>
				</Router>
			</ReactQueryConfigProvider>
		</ErrorBoundary>
	)
}

export default AppProviders

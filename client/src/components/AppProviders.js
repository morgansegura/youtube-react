import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styled'
import { darkTheme } from '@styled/theme'

function AppProviders({ children }) {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

export default AppProviders

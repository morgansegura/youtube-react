import React from 'react'
import { NavLink } from 'react-router-dom'
// Context
import { useAuth } from '@context/auth-context'
// Components
import { GoogleAuth, Search, UserDropdown } from '@components'
// Styled
import Wrapper from '@styled/Navbar'
// Icons
import {
	AppsIcon,
	HamburgerIcon,
	LogoIcon,
	SettingsIcon,
	UploadIcon
} from '@icons'

function Navbar({ toggleSidebarOpen }) {
	const user = useAuth()

	return (
		<Wrapper>
			<div className="logo flex-row">
				<HamburgerIcon
					onClick={toggleSidebarOpen}
					className="toggle-navhandler hamburger-icon"
				/>
				<span>
					<NavLink to="/">
						<LogoIcon
							style={{
								width: 80,
								height: 24
							}}
						/>
					</NavLink>
				</span>
			</div>

			<Search />

			<ul>
				<li>{user ? <UploadIcon /> : <AppsIcon />}</li>
				<li>{user ? <AppsIcon /> : <SettingsIcon />}</li>
				<li> {user ? <UserDropdown user={user} /> : <GoogleAuth />}</li>
			</ul>
		</Wrapper>
	)
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
// Components
import { GoogleAuth, Search } from '@components'
// Styled
import Wrapper from '@styled/Navbar'
// Icons
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from '@icons'

function Navbar({ toggleSidebarOpen }) {
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
				<li>
					<AppsIcon />
				</li>
				<li>
					<SettingsIcon />
				</li>
				<li>
					{' '}
					<GoogleAuth />
				</li>
			</ul>
		</Wrapper>
	)
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
// Styled
import Wrapper from '@styled/MobileNavbar'
// Icons
import { HistoryIcon, HomeIcon, SubIcon, TrendingIcon, WatchIcon } from '@icons'

function MobileNavbar() {
	return (
		<Wrapper>
			<div className="icons">
				<NavLink exact to="/">
					<HomeIcon />
				</NavLink>

				<NavLink to="/feed/trending">
					<TrendingIcon />
				</NavLink>

				<NavLink to="/feed/subscriptions">
					<SubIcon />
				</NavLink>

				<NavLink to="/feed/history">
					<HistoryIcon />
				</NavLink>

				<NavLink to="/feed/liked-videos">
					<WatchIcon />
				</NavLink>
			</div>
		</Wrapper>
	)
}

export default MobileNavbar

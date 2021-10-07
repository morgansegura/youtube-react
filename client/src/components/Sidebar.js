// @ts-nocheck
import React from 'react'
import { NavLink } from 'react-router-dom'
// Components
import { SidebarAuth } from '@components'
// Styled
import Wrapper from '@styled/Sidebar'
// Icons
import {
	HistoryIcon,
	HomeIcon,
	LibIcon,
	LikeIcon,
	SubIcon,
	TrendingIcon,
	VidIcon
} from '@icons'

function Sidebar({ isSidebarOpen }) {
	return (
		<Wrapper open={isSidebarOpen}>
			<NavLink exact to="/">
				<div className="icon">
					<HomeIcon />
					<span>Home</span>
				</div>
			</NavLink>
			<NavLink to="/feed/trending">
				<div className="icon">
					<TrendingIcon />
					<span>Trending</span>
				</div>
			</NavLink>

			<NavLink to="/feed/subscriptions">
				<div className="icon">
					<SubIcon />
					<span>Subscriptions</span>
				</div>
			</NavLink>

			<div className="divider"></div>

			<NavLink to="/feed/library">
				<div className="icon">
					<LibIcon />
					<span>Library</span>
				</div>
			</NavLink>

			<NavLink to="/feed/history">
				<div className="icon">
					<HistoryIcon />
					<span>History</span>
				</div>
			</NavLink>

			<NavLink to="/feed/my-videos">
				<div className="icon">
					<VidIcon />
					<span>Your videos</span>
				</div>
			</NavLink>

			<NavLink to="/feed/liked-videos">
				<div className="icon">
					<LikeIcon />
					<span>Liked videos</span>
				</div>
			</NavLink>

			<div className="divider"></div>

			<SidebarAuth />
		</Wrapper>
	)
}

export default Sidebar

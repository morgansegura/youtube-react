import React from 'react'
import Wrapper from '../styled/MobileNavbar'
import {
	HistoryIcon,
	HomeIcon,
	SubIcon,
	TrendingIcon,
	WatchIcon
} from './Icons'

function MobileNavbar() {
	return (
		<Wrapper>
			<div className="icons">
				<HomeIcon />

				<TrendingIcon />

				<SubIcon />

				<HistoryIcon />

				<WatchIcon />
			</div>
		</Wrapper>
	)
}

export default MobileNavbar

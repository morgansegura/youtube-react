// @ts-nocheck
import React from 'react'
import { SubIcon } from '../components/Icons'
import SignUpCard from '../components/SignUpCard'
import Wrapper from '../styled/Home'
import VideoGrid from '../styled/VideoGrid'

function Subscriptions() {
	const isAuth = false

	if (!isAuth) {
		return (
			<SignUpCard
				icon={<SubIcon />}
				title="Don't miss new videos"
				description="Sign in to see updates from your favorite YouTube channels"
			/>
		)
	}

	return (
		<Wrapper>
			<div style={{ marginTop: '1.5rem' }}></div>

			<VideoGrid>Subscription Videos</VideoGrid>
		</Wrapper>
	)
}

export default Subscriptions

// @ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { ChannelSuggestions, VideoCard, ErrorMessage } from '../components'
import { SubIcon } from '../components/Icons'
import SignUpCard from '../components/SignUpCard'
import { useAuth } from '../context/auth-context'
import { HomeSkeleton } from '../skeletons'
import Wrapper from '../styled/Home'
import VideoGrid from '../styled/VideoGrid'
import { client } from '../utils/api-client'

function Subscriptions() {
	const user = useAuth()
	const {
		data: feed,
		isLoading,
		isError,
		error,
		isSuccess
	} = useQuery(
		'Subscriptions',
		() => client.get('/users/subscriptions').then(res => res.data.feed),
		{
			enabled: user
		}
	)

	if (!user) {
		return (
			<SignUpCard
				icon={<SubIcon />}
				title="Don't miss new videos"
				description="Sign in to see updates from your favorite YouTube channels"
			/>
		)
	}

	if (isLoading) return <HomeSkeleton />
	if (isError) return <ErrorMessage error={error} />
	if (!isLoading && !feed.length) return <ChannelSuggestions />

	return (
		<Wrapper>
			<div style={{ marginTop: '1.5rem' }}></div>

			<VideoGrid>
				{isSuccess
					? feed.map(video => (
							<VideoCard
								key={video.id}
								video={video}
								hideAvatar
							/>
					  ))
					: null}
			</VideoGrid>
		</Wrapper>
	)
}

export default Subscriptions

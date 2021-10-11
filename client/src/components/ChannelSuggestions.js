import React from 'react'
import Wrapper from '@styled/Trending'
import { useQuery } from 'react-query'
import { client } from '../utils/api-client'
import { SuggestionSkeleton } from '../skeletons'
import { ChannelInfo, ErrorMessage } from '../components'

function ChannelSuggestions() {
	const {
		data: channels,
		isLoading,
		isError,
		error,
		isSuccess
	} = useQuery('Channels', () =>
		client.get('/users').then(res => res.data.channels)
	)

	if (isLoading) return <SuggestionSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper>
			<h2>Suggestions For You</h2>

			{isSuccess
				? channels.map(channel => (
						<ChannelInfo key={channel.id} channel={channel} />
				  ))
				: null}
		</Wrapper>
	)
}

export default ChannelSuggestions

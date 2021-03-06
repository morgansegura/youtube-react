// @ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { ChannelInfo, ErrorMessage, TrendingCard } from '../components'
import NoResults from '../components/NoResults'
import { TrendingSkeleton } from '../skeletons'
import Wrapper from '../styled/Trending'
import { client } from '../utils/api-client'

const StyledChannels = styled.div`
	margin-top: 1rem;
`

function SearchResults() {
	const { searchQuery } = useParams()
	const { data, isLoading, isError, error, isSuccess } = useQuery(
		['SearchResults', searchQuery],
		async () => {
			const users = await client
				.get(`/users/search?query=${searchQuery}`)
				.then(res => res.data.users)
			const videos = await client
				.get(`/videos/search?query=${searchQuery}`)
				.then(res => res.data.videos)

			return { users, videos }
		}
	)

	if (isLoading) return <TrendingSkeleton />
	if (isError) return <ErrorMessage error={error} />

	if (isSuccess && !data.videos?.length && !data.users?.length) {
		return (
			<NoResults
				title="No results found"
				text="Try different keywords or remove search filters"
			/>
		)
	}

	return (
		<Wrapper>
			<h2>Search Results</h2>
			<StyledChannels>
				{isSuccess
					? data.users.map(channel => (
							<ChannelInfo key={channel.id} channel={channel} />
					  ))
					: null}
			</StyledChannels>
			{isSuccess
				? data.videos.map(video => (
						<TrendingCard key={video.id} video={video} />
				  ))
				: null}
		</Wrapper>
	)
}

export default SearchResults

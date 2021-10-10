import React from 'react'
import { useQuery } from 'react-query'
import { ErrorMessage, TrendingCard } from '../components'
import { TrendingSkeleton } from '../skeletons'
import Wrapper from '../styled/Trending'
import { client } from '../utils/api-client'

function Trending() {
	const {
		data: videos,
		isLoading,
		isError,
		error,
		isSuccess
	} = useQuery('TendingVideos', () =>
		client.get('/videos/trending').then(res => res.data.videos)
	)

	if (isLoading) return <TrendingSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper>
			<h2>Trending</h2>

			<div className="trending">
				{isSuccess
					? videos.map(video => (
							<TrendingCard key={video.id} video={video} />
					  ))
					: null}
			</div>
		</Wrapper>
	)
}

export default Trending

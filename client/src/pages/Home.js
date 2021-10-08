import React from 'react'
import { useQuery } from 'react-query'
// Components
import { ErrorMessage, VideoCard } from '@components'
// Skeletons
import { HomeSkeleton } from '@skeletons'
// Styled
import Wrapper from '@styled/Home'
import VideoGrid from '@styled/VideoGrid'
import { client } from '../utils/api-client'

function Home() {
	const {
		data: videos,
		isSuccess,
		isLoading,
		isError,
		error
	} = useQuery('Home', () =>
		client.get('/videos').then(res => res.data.videos)
	)

	if (isLoading) return <HomeSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper>
			<VideoGrid>
				{isSuccess
					? videos.map(video => (
							<VideoCard key={video.id} video={video} />
					  ))
					: null}
			</VideoGrid>
		</Wrapper>
	)
}

export default Home

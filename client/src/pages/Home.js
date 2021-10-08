import React from 'react'
import { useQuery } from 'react-query'
// Components
import { ErrorMessage } from '@components'
// Skeletons
import { HomeSkeleton } from '@skeletons'
// Styled
import Wrapper from '@styled/Home'
import VideoGrid from '@styled/VideoGrid'
import { client } from '../utils/api-client'

function Home() {
	const {
		data: videos,
		isLoading,
		isError,
		error
	} = useQuery('Home', () => client.get('/videos').then(res => res.data))

	if (isLoading) return <HomeSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper>
			<VideoGrid>Recommended videos</VideoGrid>
		</Wrapper>
	)
}

export default Home

import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { ErrorMessage, TrendingCard } from '../components'
import { ChannelIcon } from '../components/Icons'
import SignUpCard from '../components/SignUpCard'
import { useAuth } from '../context/auth-context'
import { TrendingSkeleton } from '../skeletons'
import Wrapper from '../styled/Trending'
import { client } from '../utils/api-client'

function LikedVideos() {
	const user = useAuth()
	const {
		data: videos,
		isLoading,
		isError,
		isSuccess,
		error
	} = useQuery(
		'LikedVideos',
		() => client.get('/users/liked-videos').then(res => res.data.videos),
		{
			enabled: user
		}
	)

	if (!user) {
		return (
			<SignUpCard
				icon={<ChannelIcon />}
				title="Save everything you like"
				description="Videos that you have liked will show up here"
			/>
		)
	}

	if (isLoading) return <TrendingSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper>
			<h2>Liked Videos</h2>

			{isSuccess && !videos.length && (
				<p className="secondary">
					Videos that you have liked will show up here.
				</p>
			)}

			{isSuccess
				? videos.map(video => (
						<Link key={video.id} to={`/watch/${video.id}`}>
							<TrendingCard video={video} />
						</Link>
				  ))
				: null}
		</Wrapper>
	)
}

export default LikedVideos

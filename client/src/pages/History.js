// @ts-nocheck
import React from 'react'
import { HistoryIcon } from '../components/Icons'
import SignUpCard from '../components/SignUpCard'
import Wrapper from '@styled/Trending'
import { useQuery } from 'react-query'
import { client } from '@utils/api-client'
import { TrendingSkeleton } from '@skeletons'
import { ErrorMessage, TrendingCard } from '@components'
import { useAuth } from '@context/auth-context'
import { Link } from 'react-router-dom'

function History() {
	const user = useAuth()

	const {
		data: videos,
		isLoading,
		isSuccess,
		isError,
		error
	} = useQuery(
		'History',
		() => client.get('/users/history').then(res => res.data.videos),
		{ enabled: user }
	)

	if (!user) {
		return (
			<SignUpCard
				icon={<HistoryIcon />}
				title="Keep track of what you watch"
				description="Watch history isn't viewable when signed out"
			/>
		)
	}

	if (isLoading) return <TrendingSkeleton />
	if (isError) return <ErrorMessage error={error} />

	return (
		<Wrapper noPad>
			<h2>History</h2>
			{isSuccess && !videos.length && (
				<p className="secondary">
					Videos that you have watched witll be displayed here.
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

export default History

import React from 'react'
import { LibIcon } from '@icons'
import { SignUpCard } from '@components'
import { useAuth } from '@context/auth-context'
import { History, LikedVideos } from '@pages'

function Library() {
	const user = useAuth()

	if (!user) {
		return (
			<SignUpCard
				icon={<LibIcon />}
				title="Enjoy your favorite videos"
				description="Sign in to access videos that you’ve liked or saved."
			/>
		)
	}

	return (
		<>
			<History />
			<LikedVideos />
		</>
	)
}

export default Library

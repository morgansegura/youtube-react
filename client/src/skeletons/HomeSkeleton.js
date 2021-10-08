import React from 'react'
// Styled
import Wrapper from '@styled/Home'
import { VideoCardSkeleton } from '@styled/Skeleton'
import VideoGrid from '@styled/VideoGrid'

function HomeSkeleton() {
	return (
		<Wrapper>
			<VideoGrid>
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
				<VideoCardSkeleton />
			</VideoGrid>
		</Wrapper>
	)
}

export default HomeSkeleton

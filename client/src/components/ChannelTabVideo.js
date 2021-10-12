import React from 'react'
import { VideoCard } from '@components'
import Wrapper from '@styled/ChannelTabVideo'

function ChannelTabVideo({ videos }) {
	if (!videos.length) {
		return <p>This channel hasn't posted any videos yet.</p>
	}
	return (
		<Wrapper>
			<div className="videos">
				{videos.map(video => (
					<VideoCard
						key={video.id}
						noUsername
						hideAvatar
						video={video}
					/>
				))}
			</div>
		</Wrapper>
	)
}

export default ChannelTabVideo

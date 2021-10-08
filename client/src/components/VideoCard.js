import React from 'react'
import { Link } from 'react-router-dom'
// Components
import { DeleteVideoDropdown } from '@components'
// Components
import { formatCreatedAt } from '@utils/date'
// Styled
import Avatar from '@styled/Avatar'
import Wrapper from '@styled/VideoCard'

function VideoCard({ video }) {
	return (
		<Wrapper>
			<Link to={`/watch/${video.id}`}>
				<img
					className="thumb"
					src={video.thumbnail}
					alt={video.title}
				/>
			</Link>
			<div className="video-info-container">
				<div className="channel-avatar">
					<Avatar
						style={{ marginRight: '0.8rem' }}
						src={video.user.avatar}
						alt={video.user.name}
					/>
				</div>
				<div className="video-info">
					<Link to={`/watch/${video.id}`}>
						<h4 className="truncate">{video.title}</h4>
					</Link>
					<span>
						<span className="secondary">{video.user.username}</span>
					</span>
					<p className="secondary leading-4">
						<span>{video.views} views</span> <span>•</span>{' '}
						<span>{formatCreatedAt(video.createdAt)}</span>
					</p>
				</div>
				<DeleteVideoDropdown video={video} />
			</div>
		</Wrapper>
	)
}

export default VideoCard

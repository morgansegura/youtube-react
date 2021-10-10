import React from 'react'
// Components
import { CommentList } from '@components'
// Context
import { useAuth } from '@context/auth-context'
// Styled
import Wrapper from '@styled/CommentList'
// Assets
import defaultAvatar from '@assets/default-avatar.png'

function AddComment({ video }) {
	const user = useAuth()
	return (
		<Wrapper>
			<h3>{video.comments.length} comments</h3>

			<div className="add-comment">
				{user ? (
					<img src={user.avatar} alt={`${user.username}`} />
				) : (
					<img src={defaultAvatar} alt="default user" />
				)}
				<textarea
					placeholder="Add a public comment..."
					value=""
					rows={1}
				/>
			</div>

			<CommentList comments={video.comments} />
		</Wrapper>
	)
}

export default AddComment

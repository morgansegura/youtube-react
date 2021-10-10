import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'
// Components
import { CommentList } from '@components'
// Context
import { useAuth } from '@context/auth-context'
// Styled
import Wrapper from '@styled/CommentList'
// Assets
import defaultAvatar from '@assets/default-avatar.png'
import { addComment } from '../utils/api-client'

function AddComment({ video }) {
	const user = useAuth()
	const [openSnackbar] = useSnackbar()
	const [comment, setComment] = React.useState('')

	function handleAddComment(event) {
		if (event.keyCode === 13) {
			event.target.blur()

			if (!comment.trim()) {
				return openSnackbar('Please type a comment')
			}

			addComment({ video, comment })
				.then(() => setComment(''))
				.catch(() => openSnackbar('Sign in to add a comment'))
		}
	}

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
					value={comment}
					onKeyDown={handleAddComment}
					onChange={event => setComment(event.target.value)}
					rows={1}
				/>
			</div>

			<CommentList comments={video.comments} />
		</Wrapper>
	)
}

export default AddComment

import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import '@reach/menu-button/styles.css'
// Context
import { useAuth } from '@context/auth-context'
// Utils
import { deleteComment } from '@utils/api-client'
// Icons
import { DeleteIcon, SettingsIcon } from '@icons'

function DeleteCommentDropdown({ comment }) {
	const user = useAuth()
	const isCommentAuthor = comment.userId === user?.id

	function handleDeleteComment() {
		deleteComment(comment)
	}

	if (isCommentAuthor) {
		return (
			<div>
				<Menu>
					<MenuButton>
						<SettingsIcon />
					</MenuButton>
					<MenuList>
						<MenuItem onSelect={handleDeleteComment}>
							<DeleteIcon />
							<span>Delete Comment</span>
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		)
	}

	return null
}

export default DeleteCommentDropdown

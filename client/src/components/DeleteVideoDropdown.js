import React from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import '@reach/menu-button/styles.css'
// Context
import { useAuth } from '@context/auth-context'
// Utils
import { deleteVideo } from '@utils/api-client'
// Icons
import { DeleteIcon, SettingsIcon } from '@icons'

function DeleteVideoDropdown({ video }) {
	const user = useAuth()
	const history = useHistory()
	const isVideoAuthor = video.userId === user?.id

	async function handleDeleteVideo() {
		await deleteVideo(video.id)
		history.push(`/channel/${user.id}`)
	}

	if (isVideoAuthor) {
		return (
			<div>
				<Menu>
					<MenuButton>
						<SettingsIcon />
					</MenuButton>
					<MenuList>
						<MenuItem onSelect={handleDeleteVideo}>
							<DeleteIcon />
							<span>Delete Video</span>
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		)
	}

	return null
}

export default DeleteVideoDropdown

import React from 'react'
import { useHistory } from 'react-router-dom'
// Utils
import { signoutUser } from '@utils/api-client'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import '@reach/menu-button/styles.css'
// Styled
import Avatar from '@styled/Avatar'
// Icons
import { ChannelIcon, SignoutIcon } from '@icons'

function UserDropdown({ user }) {
	const history = useHistory()
	return (
		<Menu>
			<MenuButton>
				<Avatar
					className="pointer"
					src={user.avatar}
					alt={user.username}
				/>
			</MenuButton>
			<MenuList>
				<MenuItem onSelect={() => history.push(`/channel/${user.id}`)}>
					<ChannelIcon />
					<span>Your channel</span>
				</MenuItem>
				<MenuItem onSelect={signoutUser}>
					<SignoutIcon />
					<span>Sign out</span>
				</MenuItem>
			</MenuList>
		</Menu>
	)
}

export default UserDropdown

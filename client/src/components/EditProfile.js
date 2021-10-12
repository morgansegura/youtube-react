// @ts-nocheck
import React from 'react'
import { EditProfileModal } from '.'
import Button from '../styled/Button'
import Wrapper from '../styled/EditProfile'

function EditProfile({ profile }) {
	const [showModal, setShowModal] = React.useState(false)
	const closeModal = () => setShowModal(false)
	return (
		<>
			<Wrapper>
				<div>
					<Button grey onClick={() => setShowModal(true)}>
						Edit Profile
					</Button>
				</div>
			</Wrapper>
			{showModal && (
				<EditProfileModal profile={profile} closeModal={closeModal} />
			)}
		</>
	)
}
export default EditProfile

import React, { Component } from 'react';

class ChangeCoachingMessage extends Component {
	handleChange(event) {
		const img = document.getElementById('coachingMessageImage');
		const imageUrl = 'https://cdn.adurolife.com/assets/hp/images/';
		const coachingAnchor = document.querySelector('.coachinginfo > a');

		let coachingLink = '/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D';

		switch (event.target.value) {
			case 'General':
				img.src = `${imageUrl}Coaching_CTA_HF.png`;
				coachingLink = '/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D';
				break;

			case 'Get Moving':
				img.src = `${imageUrl}hp-tile-get-moving.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DGet%20Moving%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite%20Your%20Life';
				break;

			case 'Lighten Up':
				img.src = `${imageUrl}hp-tile-lighten-up.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DLighten+Up%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Change Your Habits':
				img.src = `${imageUrl}hp-tile-change-your-habits.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Mission Nutrition':
				img.src = `${imageUrl}hp-tile-mission-nutrition.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DMission+Nutrition%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Live Empowered':
				img.src = `${imageUrl}hp-tile-live-empowered.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DLive+Empowered%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Mood & Food':
				img.src = `${imageUrl}hp-tile-mood-and-food.png`;
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DMood%20%252526%20Food%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;
		}
		coachingAnchor.href = coachingLink;
	}

	render() {
		return (
			<div className="my-4" id="changeCoachingMessage">
				<div className="form-group">
					<label htmlFor="coachingPrograms">Change coaching message?</label>
					<select className="form-control" id="coachingPrograms" onChange={this.handleChange.bind(this)}>
						<option>General</option>
						<option>Get Moving</option>
						<option>Lighten Up</option>
						<option>Change Your Habits</option>
						<option>Live Empowered</option>
						<option>Mission Nutrition</option>
						<option>Mood & Food</option>
					</select>
				</div>
			</div>
		);
	}
}

export default ChangeCoachingMessage;

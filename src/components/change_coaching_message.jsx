import React from 'react';

class ChangeCoachingMessage extends React.Component {
	handleChange() {
		const selected = document.getElementById('changeCoachingMessage').value;
		const img = document.getElementById('coachingMessageImage');
		const imageUrl = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_';
		const coachingAnchor = document.querySelector('.coachinginfo > a');

		let coachingLink = '/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D';

		switch (selected) {
			case 'General':
				img.src = imageUrl + 'CoachingCall.png';
				coachingLink = '/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D';
				break;
			case 'Get Moving':
				img.src = imageUrl + 'GetMoving.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DGet%20Moving%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite%20Your%20Life';
				break;
			case 'Lighten Up':
				img.src = imageUrl + 'LightenUp.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DLighten+Up%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;
			case 'Change Your Habits':
				img.src = imageUrl + 'ChangeHabits.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;
			case 'Mission Nutrition':
				img.src = imageUrl + 'MissionNutrition.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DMission+Nutrition%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;
			case 'Live Empowered':
				img.src = imageUrl + 'LiveEmpowered.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DLive+Empowered%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;
			// case 'Breathe Easy':
			// 	img.src = imageUrl + 'BreatheEasy.png';
			// 	coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DBreathe+Easy%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
			// 	break;
			case 'Mood & Food':
				img.src = imageUrl + 'MoodFood.png';
				coachingLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DMood%20%252526%20Food%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

		}
		coachingAnchor.href = coachingLink;
	}

	render() {
		return (
			<p id="change-coaching-message">
				<span>Change coaching message?</span>
				<select id="changeCoachingMessage" onChange={this.handleChange.bind(this)}>
					<option>General</option>
					<option>Get Moving</option>
					<option>Lighten Up</option>
					<option>Change Your Habits</option>
					<option>Live Empowered</option>
					<option>Mission Nutrition</option>
					<option>Mood & Food</option>
					{/* <option>Breathe Easy</option> */}
				</select>
			</p>
		);
	}
}

export default ChangeCoachingMessage;

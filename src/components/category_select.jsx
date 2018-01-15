import React, { Component } from 'react';

class CategorySelect extends Component {
	handleChange() {
		var challengeCategory = document.getElementById('challengeCategory').value;
		var bottomImage = document.getElementById('bottomImage');
		var coachinginfo = document.getElementsByClassName('coachinginfo')[0];

		let coachingMessageImageSrc, coachingMessageLink, bottomImageSrc;

		switch (challengeCategory) {

			case 'Health and Fitness':
				coachingMessageImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_General.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DGet%20Moving%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite%20Your%20Life';
				bottomImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Device%20Tracking_web.png';
				break;

			case 'Growth and Development':
				coachingMessageImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_ChangeHabits.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				bottomImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Well-Being_web.png';
				break;

			case 'Money and Prosperity':
				coachingMessageImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_ChangeHabits.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				bottomImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Finance_web.png';
				break;

			case 'Contribution and Sustainability':
				coachingMessageImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_ChangeHabits.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				bottomImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Environment_web.png';
				break;

			default:
				coachingMessageImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_ChangeHabits.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				bottomImageSrc = 'https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Device%20Tracking_web.png';
				break;
		}

		if (coachinginfo) {
			coachinginfo.innerHTML = `<a href="${coachingMessageLink}" target="_blank"><img id="coachingMessageImage" src="${coachingMessageImageSrc}" style="width:100%" alt="healthcoach"/></a>`;
		}

		if (bottomImage) {
			bottomImage.src = bottomImageSrc;
			bottomImage.setAttribute('alt', challengeCategory);
		}

	}

	render() {
		return (
			<select id="challengeCategory" onChange={this.handleChange.bind(this)}>
				<option>--Select Challenge Category--</option>
				<option>Health and Fitness</option>
				<option>Growth and Development</option>
				<option>Money and Prosperity</option>
				<option>Contribution and Sustainability</option>
			</select>
		);
	}
}

export default CategorySelect;

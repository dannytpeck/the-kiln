import React, { Component } from 'react';

class CategorySelect extends Component {
	handleChange() {
		var challengeCategory = document.getElementById('challengeCategory').value;
		var coachinginfo = document.getElementsByClassName('coachinginfo')[0];

		let coachingMessageImageSrc, coachingMessageLink;

		switch (challengeCategory) {

			case 'Health and Fitness':
				coachingMessageImageSrc = 'https://cdn.adurolife.com/assets/hp/images/hp-tile-get-moving.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DGet%20Moving%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite%20Your%20Life';
				break;

			case 'Money and Prosperity':
				coachingMessageImageSrc = 'https://cdn.adurolife.com/assets/hp/images/hp-tile-budget-basics.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Growth and Development':
				coachingMessageImageSrc = 'https://cdn.adurolife.com/assets/hp/images/hp-tile-change-your-habits.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			case 'Contribution and Sustainability':
				coachingMessageImageSrc = 'https://cdn.adurolife.com/assets/hp/images/hp-tile-think-green.png';
				coachingMessageLink = '/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life';
				break;

			default:
				coachingMessageImageSrc = 'https://cdn.adurolife.com/assets/hp/images/Coaching_CTA_HF.png';
				coachingMessageLink = '/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D';
				break;
		}

		if (coachinginfo) {
			coachinginfo.innerHTML = `<a href="${coachingMessageLink}" target="_blank"><img id="coachingMessageImage" src="${coachingMessageImageSrc}" style="width:100%" alt="healthcoach"/></a>`;
		}

	}

	render() {
		return (
			<div className="form-group">
				<select className="form-control" id="challengeCategory" onChange={this.handleChange.bind(this)}>
					<option>--Select Challenge Category--</option>
					<option>Health and Fitness</option>
					<option>Money and Prosperity</option>
					<option>Growth and Development</option>
					<option>Contribution and Sustainability</option>
				</select>
			</div>
		);
	}
}

export default CategorySelect;

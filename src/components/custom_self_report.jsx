import React from 'react';
import SelfReportEdit from './self_report_edit';
import SelfReportPreview from './self_report_preview';
import SelfReportJsonDetails from './self_report_json_details';
import SelfReportCodeBox from './self_report_code_box';
import uploadToAirtable from '../helpers/upload_to_airtable';

class CustomSelfReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			shortDescription: 'YOUR CHALLENGE: Complete this fun activity by the challenge end date.',
			tagline: 'TAGLINE PHRASE',
			moreInformation: 'Here you can write some additional details about how to complete the challenge. You could also add some tips for people at different skill levels for the activity.',
      resourceLink: '#',
      resourceText: 'An interesting resource',
      resources: '<li><a href="#" target="_blank">An interesting resource</a>.</li><li><a href="#" target="_blank">An interesting resource</a>.</li>',

      // initial state for xmp?
      shortDescriptionHtml: '<p style="font-weight: bold; font-size: 14px">YOUR CHALLENGE: Complete this fun activity by the challenge end date.</p>',
      htmlDescriptionHtml: '<h3 id="tagline" class="brandingBckgrndColor" style="padding: 10px; color: #fff; text-transform: uppercase;">TAGLINE PHRASE</h3><div id="moreInformation"></div><div id="resources"><h3 class="link-color" style="text-transform: uppercase;">additional resources</h3><ul style="padding-left: 20px;"><li><a href="target=&quot;_blank&quot;">fsfsases</a>.</li><li><a href="target=&quot;_blank&quot;">asefses</a>.</li></ul></div><span class="coachinginfo"><a href="/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D" target="_blank"><img id="coachingMessageImage" src="https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_CoachingCall.png" alt="healthcoach" style="width: 100%;"></a></span><img id="bottomImage" src="https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Device%20Tracking_web.png" alt="Ignite Your Life" style="width: 100%;"><p style="font-size: 9px;"><span>&copy; Copyright 2018 </span><a href="http://www.adurolife.com" target="_blank" style="text-decoration: none;">ADURO, INC.</a><span> All rights reserved.</span></p>'
    };
  }

  handleUploadClick() {
		uploadToAirtable();
	}

	handleKeyUp(event) {
		switch (event.target.id) {
			case 'shortDescriptionEdit':
				this.setState({ shortDescription: event.target.value });
				break;
			case 'taglineEdit':
				this.setState({ tagline: event.target.value });
				break;
			case 'moreInformationEdit':
				this.setState({ moreInformation: event.target.innerHTML });
				break;
			case 'resourceUrl':
      case 'resourceText':
        // This is fake, just to trigger an XMP update
				this.setState({ resources: event.target.innerHTML });
				break;
		}
	}

  handleClick(event) {
    switch (event.target.id) {
      case 'removeResourcesButton':
      case 'removeCoachingButton':
      case 'changeCoachingMessage':
      case 'deleteResource':
      case 'addNewResource':
        // This fake, just to trigger an XMP update
        this.setState({ resources: this.state.resources });
        break;
    }
  }

	render() {
		return (
			<div id="custom-self-report">
				<div className="left-column">
					<SelfReportEdit onKeyUp={this.handleKeyUp.bind(this)} onClick={this.handleClick.bind(this)} />
					<div id="button-container">
						<input id="titleInput" type="text" placeholder="Challenge Title"/>
						<button className="btn btn-primary" id="airtable-upload" onClick={this.handleUploadClick}>Create Airtable Record</button>
					</div>
					<SelfReportJsonDetails />
				</div>
				<div className="right-column">
					<SelfReportPreview
					shortDescription={this.state.shortDescription}
					tagline={this.state.tagline}
					moreInformation={this.state.moreInformation}
          resources={this.state.resources} />
          <SelfReportCodeBox
          shortDescriptionHtml={this.state.shortDescriptionHtml}
          htmlDescriptionHtml={this.state.htmlDescriptionHtml} />
				</div>
			</div>
		);
	}
}

export default CustomSelfReport;

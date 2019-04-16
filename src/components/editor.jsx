import React, { Component } from 'react';
import CategorySelect from './category_select';
import SelfReportEdit from './self_report_edit';
import AirtableDetails from './airtable_details';
import SelfReportCodeBox from './self_report_code_box';
import uploadToAirtable from '../helpers/upload_to_airtable';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  /* globals $ */
  changeName(event) {
    $('.info-title').html(event.target.value);
  }

	render() {
		return (
			<div id="custom-self-report">

        <CategorySelect />

        <div className="form-group">
          <label htmlFor="challengeName">Challenge Name</label>
          <input type="text" className="form-control" id="challengeName" onChange={(e) => this.changeName(e)} />
        </div>

        <SelfReportEdit onKeyUp={this.handleKeyUp.bind(this)} onClick={this.handleClick.bind(this)} />
        <div id="button-container">
          <input id="titleInput" type="text" placeholder="Challenge Title"/>
          <button className="btn btn-primary" id="airtable-upload" onClick={this.handleUploadClick}>Create Airtable Record</button>
        </div>
        <AirtableDetails />

        <SelfReportCodeBox
        shortDescriptionHtml={this.state.shortDescriptionHtml}
        htmlDescriptionHtml={this.state.htmlDescriptionHtml} />

			</div>
		);
	}
}

export default Editor;

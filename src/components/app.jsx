import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';
import UploadModal from './upload_modal';
import HtmlCodeBox from './html_code_box';
import AirtableModal from './airtable_modal';

class Kiln extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shortDescription: 'Using the Sleep Journal provided for you, create awareness of your overall sleep by tracking your sleep patterns and habits at least 5 days each week.',
      moreInformation: '<p>When you reflect on your daily energy level, does sleep impact it? How would you rate your overall sleep? What are the areas of sleep you struggle with? What elements of your life or health are affected by your sleep?</p><p>Poor sleep is linked to several health risks, including diabetes, obesity, cancer and chronic fatigue. One of the most valuable ways to build awareness of your overall sleep is to actively record or track your sleep in as much detail as you can. Use the <a href="https://mywellnessnumbers.com/tipsheets/2016/sleep-journal.pdf" target="_blank">Sleep Journal</a> attached to create awareness and enable action to improve your sleep.</p>',
      resourceLink: '#',
      resourceText: 'An interesting resource',
      resources: '<li><a href="https://mywellnessnumbers.com/tipsheets/2016/sleep-journal.pdf" target="_blank">Sleep Journal</a>.</li>',

      // initial state for xmp?
      moreDescriptionHtml: '<div id="moreInformation"><p>When you reflect on your daily energy level, does sleep impact it? How would you rate your overall sleep? What are the areas of sleep you struggle with? What elements of your life or health are affected by your sleep?</p> <p>Poor sleep is linked to several health risks, including diabetes, obesity, cancer and chronic fatigue. One of the most valuable ways to build awareness of your overall sleep is to actively record or track your sleep in as much detail as you can. Use the <a href="https://mywellnessnumbers.com/tipsheets/2016/sleep-journal.pdf" target="_blank">Sleep Journal</a> attached to create awareness and enable action to improve your sleep.</p></div><div id="resources"> <h3 class="link-color" style="text-transform: uppercase;">additional resources</h3> <ul style="padding-left: 20px;"> <li><a href="https://mywellnessnumbers.com/tipsheets/2016/sleep-journal.pdf" target="_blank">Sleep Journal</a>.</li> </ul></div><span class="coachinginfo"><a href="/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D" target="_blank"><img id="coachingMessageImage" src="https://cdn.adurolife.com/assets/hp/images/Coaching_CTA_HF.png" alt="healthcoach" style="width: 100%;"></a></span><p style="font-size: 0.7em;">&copy; Copyright 2019 <a style="text-decoration: none;" href="http://www.adurolife.com" target="_blank" rel="noopener">ADURO, INC.</a> All rights reserved.</p>'
    };
  }

  handleKeyUp(event) {
		switch (event.target.id) {
      case 'challengeName':
        this.setState({ challengeName: event.target.value });
        break;
			case 'shortDescriptionBox':
				this.setState({ shortDescription: event.target.value });
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
      case 'coachingPrograms':
      case 'deleteResource':
      case 'addNewResource':
        // This is fake, just to trigger an XMP update
        this.setState({ resources: this.state.resources });
        break;
    }
  }

  /* globals $ */
  openAirtableModal() {
    $('#airtableModal').modal();
  }

	render() {
		return (
			<div className="row">
        <div className="col-5">
          <Header />
          <Editor onKeyUp={this.handleKeyUp.bind(this)} onClick={this.handleClick.bind(this)}/>

          <button className="btn btn-primary" onClick={() => this.openAirtableModal()}>Airtable Record Details</button>
        </div>
        <div className="col-6 offset-md-1">
          <Preview
          shortDescription={this.state.shortDescription}
          moreInformation={this.state.moreInformation}
          resources={this.state.resources} />

          <HtmlCodeBox
          shortDescriptionHtml={this.state.shortDescription}
          moreDescriptionHtml={this.state.moreDescriptionHtml} />
        </div>
				<UploadModal />
        <AirtableModal />
			</div>
		);
	}
}

export default Kiln;

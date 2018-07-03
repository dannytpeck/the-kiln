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
      resourceText: 'An interesting resource'
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
			case 'resources-section':
				this.setState({ resources: event.target.innerHTML });
				break;
		}
	}

	render() {
		return (
			<div id="custom-self-report">
				<div className="left-column">
					<SelfReportEdit onKeyUp={this.handleKeyUp.bind(this)} />
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
          <SelfReportCodeBox />
				</div>
			</div>
		);
	}
}

export default CustomSelfReport;

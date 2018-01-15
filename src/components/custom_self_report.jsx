import React from 'react';
import SelfReportEdit from './self_report_edit';
import SelfReportPreview from './self_report_preview';
import SelfReportJsonDetails from './self_report_json_details';

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
		}
	}

	render() {
		return (
			<div>
				<SelfReportEdit onKeyUp={this.handleKeyUp.bind(this)} />
				<SelfReportPreview
					shortDescription={this.state.shortDescription}
					tagline={this.state.tagline}
					moreInformation={this.state.moreInformation}
          resources={`<li><a href="${this.state.resourceLink}" target="_blank">${this.state.resourceText}</a>.</li>`} />
        <SelfReportJsonDetails />
			</div>
		);
	}
}

export default CustomSelfReport;

import React from 'react';
import CieEdit from './cie_edit';
import CiePreview from './cie_preview';
import downloadCSV from '../helpers/download_csv';
import uploadToLimeade from '../helpers/upload_to_limeade';
import CieDetails from './cie_details';
import CieCodeBox from './cie_code_box';

class CustomCie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			title: 'Interesting Title Goes Here',
			description: 'Here you can write some additional details about how to complete the challenge. You could also add some tips for people at different skill levels for the activity.'
    };
  }

	handleKeyUp(event) {
		switch (event.target.id) {
			case 'titleEdit':
				this.setState({ title: event.target.value });
				break;
			case 'descriptionEdit':
				this.setState({ description: event.target.value });
				break;
		}		
	}
  
	handleDownloadClick() {
		downloadCSV('cie');
	}
  
	handleUploadClick() {
		uploadToLimeade('cie');
	}

	render() {
		return (
			<div>
				<CieEdit onKeyUp={this.handleKeyUp.bind(this)} />
				<CiePreview 
					title={this.state.title} 
					description={this.state.description}
				/>
				<button className="btn btn-default" id="download" onClick={this.handleDownloadClick}>Download CSV</button>
				<button className="btn btn-primary" id="limeade-upload" onClick={this.handleUploadClick}>Upload to Limeade</button>
				<CieDetails/>
				<CieCodeBox/>
			</div>
		);
	}
}

export default CustomCie;

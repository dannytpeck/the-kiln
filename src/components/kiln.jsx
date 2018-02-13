import React from 'react';
import SelectChallengeType from './select_challenge_type';
import UploadModal from './upload_modal';
import CustomSelfReport from './custom_self_report';
import CustomCie from './custom_cie';
import { uploadToLibrary } from '../helpers/';

class Kiln extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

	handleUploadClick() {
		uploadToLibrary();
	}

	handleSelectType(event) {
		this.setState({ content: event.target.value });
	}

	render() {
		var content = '';

    switch (this.state.content) {
      case 'Custom Self-Report':
        content = <CustomSelfReport />;
        break;
      case 'Custom CIE':
        content = <CustomCie />;
        break;
    }

		return (
			<div>
				<h2>The Kiln</h2>
				<p>What are we creating?</p>
        <SelectChallengeType onChange={this.handleSelectType.bind(this)} />
				{content}
				<input id="titleInput" type="text" placeholder="Library Post Title"/>
				<button className="btn btn-primary" id="upload" onClick={this.handleUploadClick}>Create Library Post</button>
				<UploadModal />
			</div>
		);
	}
}

export default Kiln;
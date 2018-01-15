import React from 'react';
import Selectors from './selectors';
import UploadModal from './upload_modal';
import CustomSelfReport from './custom_self_report';
import CustomCie from './custom_cie';
import { uploadToLibrary } from '../helpers/';

class Crushinator extends React.Component {
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
				<h2>The Crushinator</h2>
				<p>What are we creating?</p>
				<Selectors onChange={this.handleSelectType.bind(this)} />
				{content}
				<input id="titleInput" type="text" placeholder="Library Post Title"/>
				<button className="btn btn-primary" id="upload" onClick={this.handleUploadClick}>Create Library Post</button>
				<UploadModal />
			</div>
		);
	}
}

export default Crushinator;

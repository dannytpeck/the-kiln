import React from 'react';
import UploadModal from './upload_modal';
import CustomSelfReport from './custom_self_report';


class Kiln extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<h2>The Kiln</h2>
				<p>What are we creating?</p>
				<CustomSelfReport />
				<UploadModal />
			</div>
		);
	}
}

export default Kiln;

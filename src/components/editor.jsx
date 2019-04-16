import React, { Component } from 'react';

import CategorySelect from './category_select';
import SelfReportEdit from './self_report_edit';
import uploadToAirtable from '../helpers/upload_to_airtable';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  handleUploadClick() {
		uploadToAirtable();
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
        <CategorySelect />

        <SelfReportEdit onKeyUp={this.props.onKeyUp} onClick={this.handleClick.bind(this)} />
			</div>
		);
	}
}

export default Editor;

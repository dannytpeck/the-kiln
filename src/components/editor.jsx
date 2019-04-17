import React, { Component } from 'react';

import CategorySelect from './category_select';
import TrumbowygBox from './trumbowyg_box';
import Resources from './resources';
import Coaching from './coaching';

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

  /* globals $ */
  changeName(event) {
    $('.info-title').html(event.target.value);
  }

  changeTagline(event) {
    $('#tagline').html(event.target.value);
  }

  changeShortDescription(event) {
    $('#shortDescription').html(event.target.value);
  }

	render() {
    const { onKeyUp } = this.props;
		return (
			<div id="custom-self-report">
        <CategorySelect />

        <div id="edit" onKeyUp={onKeyUp} onClick={this.handleClick.bind(this)}>

          <div className="form-group">
            <label htmlFor="challengeName">Challenge Name</label>
            <input type="text" className="form-control" id="challengeName" onChange={(e) => this.changeName(e)} />
          </div>

          <div className="form-group">
            <label htmlFor="shortDescriptionBox">Short Description</label>
            <input type="text" className="form-control" id="shortDescriptionBox" onChange={(e) => this.changeShortDescription(e)} />
          </div>

          <div className="form-group">
            <label htmlFor="taglineBox">Tagline</label>
            <input type="text" className="form-control" id="taglineBox" onChange={(e) => this.changeTagline(e)} />
          </div>

          <TrumbowygBox name="moreInformation" title="More Information (HTML)" />
          <Resources />
          <Coaching />
        </div>

			</div>
		);
	}
}

export default Editor;

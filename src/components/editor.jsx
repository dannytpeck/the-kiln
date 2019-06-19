import React, { Component } from 'react';

import CategorySelect from './category_select';
import TrumbowygBox from './trumbowyg_box';
import Resources from './resources';
import Coaching from './coaching';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  /* globals $ */
  changeName(event) {
    $('.info-title').html(event.target.value);
  }

  changeShortDescription(event) {
    $('#shortDescription').html(event.target.value);
  }

	render() {
    const { onKeyUp, onClick } = this.props;

		return (
			<div id="editor" onKeyUp={onKeyUp} onClick={onClick}>

        <CategorySelect />

        <div className="form-group">
          <label htmlFor="challengeName">Challenge Name</label>
          <input type="text" className="form-control" id="challengeName" onChange={(e) => this.changeName(e)} />
        </div>

        <div className="form-group">
          <label htmlFor="shortDescriptionBox">Short Description</label>
          <input type="text" className="form-control" id="shortDescriptionBox" onChange={(e) => this.changeShortDescription(e)} />
        </div>

        <TrumbowygBox name="moreInformation" title="More Information (HTML)" />

        <Resources />

        <Coaching />

			</div>
		);
	}
}

export default Editor;

import React, { Component } from 'react';

import TrumbowygBox from './trumbowyg_box';
import Coaching from './coaching';
import Resources from './resources';

class SelfReportEdit extends Component {
  constructor(props) {
    super(props);
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
    const { onKeyUp, onClick } = this.props;

    return (
      <div id="edit" onKeyUp={onKeyUp} onClick={onClick}>

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
    );
  }
}

export default SelfReportEdit;

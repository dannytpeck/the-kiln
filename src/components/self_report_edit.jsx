import React, { Component } from 'react';

import EditBox from './edit_box';
import TrumbowygBox from './trumbowyg_box';
import Coaching from './coaching';
import Resources from './resources';

class SelfReportEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state for xmp?
      shortDescriptionHtml: '<p style="font-weight: bold; font-size: 14px">YOUR CHALLENGE: Complete this fun activity by the challenge end date.</p>',
      htmlDescriptionHtml: '<h3 id="tagline" class="brandingBckgrndColor" style="padding: 10px; color: #fff; text-transform: uppercase;">TAGLINE PHRASE</h3><div id="moreInformation"></div><div id="resources"><h3 class="link-color" style="text-transform: uppercase;">additional resources</h3><ul style="padding-left: 20px;"><li><a href="target=&quot;_blank&quot;">fsfsases</a>.</li><li><a href="target=&quot;_blank&quot;">asefses</a>.</li></ul></div><span class="coachinginfo"><a href="/api/redirect?url=https%3A//wellmetricssurveys.secure.force.com/Calendar/ProgramCalendarV2%3Fe=%5Be%5D%26formType=%26calendarName=Ignite+Your+Life%26participantCode=%5Bparticipantcode%5D" target="_blank"><img id="coachingMessageImage" src="https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_CoachingCall.png" alt="healthcoach" style="width: 100%;"></a></span><img id="bottomImage" src="https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Device%20Tracking_web.png" alt="Ignite Your Life" style="width: 100%;"><p style="font-size: 9px;"><span>&copy; Copyright 2018 </span><a href="http://www.adurolife.com" target="_blank" style="text-decoration: none;">ADURO, INC.</a><span> All rights reserved.</span></p>'
    };
  }

  /* globals $ */
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
          <label htmlFor="shortDescriptionBox">Short Description</label>
          <input type="text" className="form-control" id="shortDescriptionBox" onChange={(e) => this.changeShortDescription(e)} />
        </div>

        <div className="form-group">
          <label htmlFor="taglineBox">Tagline</label>
          <input type="text" className="form-control" id="taglineBox" onChange={(e) => this.changeTagline(e)} />
        </div>

        <TrumbowygBox name="moreInformation" title="More Information (HTML)" characters="2000" />
        <Resources />
        <Coaching />
      </div>
    );
  }
}

export default SelfReportEdit;

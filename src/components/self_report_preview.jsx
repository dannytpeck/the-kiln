import React from 'react';

const SelfReportPreview = ({ shortDescription, tagline, moreInformation, resources }) => {
  const today = new Date;
	const currentYear = today.getFullYear();

  return (
    <div id="preview">
      <h3>Description</h3>
      <p style={{ fontWeight: 'bold', fontSize: '14px' }}>
        <span id="shortDescription">{shortDescription}</span>
      </p>
      <div id="htmlDescription">
        <h3 id="tagline" className="brandingBckgrndColor" style={{ padding: '10px', color: '#fff', textTransform: 'uppercase' }}>{tagline}</h3>
        <div id="moreInformation"><p dangerouslySetInnerHTML={{ __html: moreInformation }}></p></div>
        <div id="resources">
          <h3 className="link-color" style={{ textTransform: 'uppercase' }}>additional resources</h3>
          <ul
            style={{ paddingLeft: '20px' }}
            dangerouslySetInnerHTML={{ __html: resources }}>
          </ul>
        </div>
        <span className="coachinginfo">
          <a href="/api/Redirect?url=https%3A%2F%2Fwellmetricssurveys.secure.force.com%2FEvent%2FCoachingEventCheckin%3Fp%3D%5Be%5D%26cpName%3DChange+Your+Habits%26participantCode%3D%5Bparticipantcode%5D%26eventType%3DIgnite+Your+Life" target="_blank">
            <img id="coachingMessageImage" src="https://mywellnessnumbers.com/ChallengeBank/coaching-messages/2017/ADURO_Challenge_CoachingMessages_General.png" style={{ width: '100%' }} alt="healthcoach"/>
          </a>
        </span>
        <img id="bottomImage" src="https://mywellnessnumbers.com/ChallengeBank/inline-images/CB_Device%20Tracking_web.png" style={{ width: '100%' }} alt="Ignite Your Life"/>
        <p style={{ fontSize: '9px' }}>
          <span>&#169; Copyright {currentYear} </span>
          <a style={{ textDecoration: 'none' }} href="http://www.adurolife.com" target="_blank">ADURO, INC.</a>
          <span> All rights reserved.</span>
        </p>
      </div>

    </div>
  );
};

export default SelfReportPreview;

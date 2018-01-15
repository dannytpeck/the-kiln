import React from 'react';

const SelfReportJsonDetails = () => {
  return (
    <div id="jsonDetails">
      <h4>JSON Object:</h4>
      <div id="jsonEdit">
        <label>Dimensions<input id="jsonDimensions" type="text" placeholder='"Resilience", "Self-Care"'></input></label><br/>
        <label>Image URL<input id="jsonImageUrl" type="text" placeholder="#"></input></label><br/>
        <label>Team<input id="jsonTeam" type="text" placeholder="Team/Individual"></input></label><br/>
        <label>Tracking<input id="jsonTracking" type="text" placeholder="One Time/One Time Days/One Time Units/Weekly Days/Weekly Units"></input></label><br/>
        <label>Required<input id="jsonRequired" type="text" placeholder="0"></input></label><br/>
        <label>Device <input id="jsonDevice" type="text" placeholder="yes/no"></input></label><br/>
        <label>Text <input id="jsonText" type="text" placeholder="daily activity OR steps | exercise OR miles | exercise" maxlength="31"></input></label><br/>
      </div>
    </div>
  );
};

export default SelfReportJsonDetails;

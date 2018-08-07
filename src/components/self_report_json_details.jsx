import React from 'react';

class SelfReportJsonDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="jsonDetails">
        <h4>JSON Object:</h4>

        <form id="form jsonEdit">

          <div className="form-group">
            <label htmlFor="jsonDimensions">Limeade Dimensions</label>
            <input type="text" className="form-control" id="jsonDimensions" placeholder="e.g., Resilience, Self-Care" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonImageUrl">Limeade Image URL</label>
            <input type="text" className="form-control" id="jsonImageUrl" placeholder="e.g., /cfs-file.ashx/__key/CommunityServer-Components-PostAttachments/00-21-21-14-42/example.jpg" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonTeamActivity">Team Activity?</label>
            <select id="jsonTeamActivity" className="form-control custom-select">
              <option defaultValue>no</option>
              <option>yes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonRewardOccurrence">Reward Occurrence</label>
            <select id="jsonRewardOccurrence" className="form-control custom-select">
              <option defaultValue>Once</option>
              <option>Weekly</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonActivityTrackingType">Activity Tracking Type</label>
            <select id="jsonActivityTrackingType" className="form-control custom-select">
              <option defaultValue>Event</option>
              <option>Days</option>
              <option>Units</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonActivityGoal">Activity Goal</label>
            <input type="text" className="form-control" id="jsonActivityGoal" placeholder="e.g., 1" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonActivityGoalText">Activity Goal Text</label>
            <input type="text" className="form-control" id="jsonActivityGoalText" placeholder="e.g., throw tables" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonDeviceEnabled">Device Enabled?</label>
            <select id="jsonDeviceEnabled" className="form-control custom-select">
              <option defaultValue>no</option>
              <option>yes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonDeviceUnits">Device Units</label>
            <input type="text" className="form-control" id="jsonDeviceUnits" placeholder="e.g., steps, miles" />
          </div>

        </form>
      </div>
    );
  }
}

export default SelfReportJsonDetails;

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
            <label htmlFor="jsonDimensions">Dimensions</label>
            <input type="text" className="form-control" id="jsonDimensions" placeholder='Resilience, Self-Care' />
          </div>

          <div className="form-group">
            <label htmlFor="jsonImageUrl">Image URL</label>
            <input type="text" className="form-control" id="jsonImageUrl" placeholder="#" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonTeam">Team</label>
            <select id="jsonTeam" className="form-control custom-select">
              <option defaultValue>Individual</option>
              <option>Team</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonTracking">Tracking</label>
            <select id="jsonTracking" className="form-control custom-select">
              <option defaultValue>One Time</option>
              <option>One Time Days</option>
              <option>One Time Units</option>
              <option>Weekly Days</option>
              <option>Weekly Units</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonRequired">Required (Times to Track)</label>
            <input type="text" className="form-control" id="jsonRequired" placeholder="0" />
          </div>

          <div className="form-group">
            <label htmlFor="jsonDevice">Device</label>
            <select id="jsonDevice" className="form-control custom-select">
              <option defaultValue>no</option>
              <option>yes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jsonText">Tracking Text</label>
            <input type="text" className="form-control" id="jsonText" placeholder="daily activity OR steps | exercise OR miles | exercise" />
          </div>

        </form>
      </div>
    );
  }
}

export default SelfReportJsonDetails;

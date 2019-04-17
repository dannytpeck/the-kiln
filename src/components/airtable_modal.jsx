import React, { Component } from 'react';

import uploadToAirtable from '../helpers/upload_to_airtable';

class AirtableModal extends Component {
  constructor(props) {
    super(props);
  }

  /* globals $ */
  handleUploadClick() {
    $('#airtableModal').modal('hide');
		uploadToAirtable();
	}

  render() {
    return (
      <div className="modal" id="airtableModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Airtable Record Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form>

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
                  <input type="text" className="form-control" id="jsonActivityGoal" placeholder="e.g., 1, 3, 20" />
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

            <div className="modal-footer">
              <button className="btn btn-primary" id="airtableUpload" onClick={() => this.handleUploadClick()}>Create Airtable Record</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AirtableModal;

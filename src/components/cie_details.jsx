/* globals $ */
import React from 'react';
import ToggleTargeting from './toggle_targeting';

class CieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTargeting() {
		$('#targeting-group').toggle();
	}

  render() {
    return (
      <div id="cie-details-container">
				<div id="cie-details-section">
					<h4 id="cie-details-label">CIE Details</h4>
					<input id="employer-name" type="text" placeholder="EmployerName"/>
					<input id="event-id" type="text" placeholder="EventId"/>
					<input id="points-awarded" type="text" placeholder="PointsAwarded"/>
					<input id="event-image-url" type="text" placeholder="EventImageUrl"/>
					<input id="limeadePSK" type="text" placeholder="PSK"/>
				</div>

				<div id="targeting-section">
					<h4 id="targeting-label">Targeting (if needed)</h4>
					<button className="btn btn-default" id="show-targeting" onClick={this.toggleTargeting}>Toggle Targeting</button>
					<ToggleTargeting />
				</div>
			</div>
    );
  }
}

export default CieDetails;

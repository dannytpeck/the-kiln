/* globals $ */
import React from 'react';

class CieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // function for showing and hiding targeting
	// TODO: Get it working
	// change from onclick to something better
  toggleTargeting() {
		console.log('Toggle Targeting Clicked');
		$('#targeting-group').toggle();
			// function handleClick(e) {
			// 	e.preventDefault();
			// 	if (document.getElementById('targeting-group').className === 'hidden') {
			// 	document.getElementById('targeting-group').classList.add('visible');
			// 	document.getElementById('targeting-group').classList.remove('hidden');
			// } else {
			// 	document.getElementById('targeting-group').classList.add('hidden');
			// 	document.getElementById('targeting-group').classList.remove('visible');
			// }
			// }
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
					<div id="targeting-group">
						<input id="subgroup-id" type="text" placeholder="SubgroupId"/>
						<h6 id="targeting-or-label">or</h6>
						<input id="field-1-name" type="text" placeholder="Field1Name"/>
						<input id="field-1-value" type="text" placeholder="Field1Value"/>
						<input id="field-2-name" type="text" placeholder="Field2Name"/>
						<input id="field-2-value" type="text" placeholder="Field2Value"/>
						<input id="field-3-name" type="text" placeholder="Field3Name"/>
						<input id="field-3-value" type="text" placeholder="Field3Value"/>
					</div>
				</div>
			</div>
    );
  }
}

export default CieDetails;

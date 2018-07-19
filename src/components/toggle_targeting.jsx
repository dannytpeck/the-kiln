import React from 'react';

class ToggleTargeting extends React.Component {
	
	render() {
		return (
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
		);
	}
}

export default ToggleTargeting;

/* globals $*/

import React from 'react';
import clean from '../helpers/clean';

export const GenerateCIE = () => {
	'use strict';
	var preview = document.getElementById('preview');
	var edit = document.getElementById('edit');
	var htmlDescription = document.getElementById('htmlDescription');

	preview.style.left = '1em';
	edit.style.padding = '10px';
	edit.style.overflow = 'hidden';
	edit.style.position = 'absolute';
	edit.style.top = '0px';
	edit.style.left = '550px';
	edit.style.width = '440px';

	// Remove IDs
	document.getElementById('description').removeAttribute('id');
	// document.getElementById('bottomImage').removeAttribute('id');

	edit.innerHTML =
		'<div class="col-md-12" id="cie-details-section">' +
		'<h4 id="cie-details-label">CIE Details</h4>' +
		'<input id="employer-name" type="text" placeholder="EmployerName"/>' +
		'<input id="event-id" type="text" placeholder="EventId"/>' +
		'<input id="points-awarded" type="text" placeholder="PointsAwarded"/>' +
		'<input id="event-image-url" type="text" placeholder="EventImageUrl"/>' +
		'<input id="limeadePSK" type="text" placeholder="PSK"/>' +
		'</div>' +

		'<div class="col-md-12" id="targeting-section">' +
		'<button class="btn btn-default" id="show-targeting" onclick=toggleTargeting()>Show Targeting</button>' +
		'<div class="hidden" id="targeting-group">' +
		'<h4 id="targeting-label">Targeting (if needed)</h4>' +
		'<input id="subgroup-id" type="text" placeholder="SubgroupId"/>' +
		'<h6 id="targeting-or-label">or</h6>' +
		'<input id="field-1-name" type="text" placeholder="Field1Name"/>' +
		'<input id="field-1-value" type="text" placeholder="Field1Value"/>' +
		'<input id="field-2-name" type="text" placeholder="Field2Name"/>' +
		'<input id="field-2-value" type="text" placeholder="Field2Value"/>' +
		'<input id="field-3-name" type="text" placeholder="Field3Name"/>' +
		'<input id="field-3-value" type="text" placeholder="Field3Value"/>' +
		'</div>' +
		'</div>' +

		'<div class="col-md-12" id="html-description-section">' +
		'<h4 id="html-description-label">HTML Description:</h4>' +
		'<div style="border:2px solid grey; padding:5px; word-wrap:break-word">' +
			'<xmp id="htmlContent" data-language="html">' +
				'<div style="font-size: 14px; line-height: 1.3em">' + clean(htmlDescription.innerHTML) + '</div>' +
			'</xmp>' +
		'</div>' +
		'</div>';

		// function for showing and hiding targeting
		// ensure it works in here
		// change from onclick to something better
		window.toggleTargeting = () => {
			if (document.getElementById('targeting-group').className === 'hidden') {
				document.getElementById('targeting-group').classList.add('visible');
				document.getElementById('targeting-group').classList.remove('hidden');
			} else {
				document.getElementById('targeting-group').classList.add('hidden');
				document.getElementById('targeting-group').classList.remove('visible');
			}
		};

	setTimeout(function () {

		edit.style.paddingTop = '50px';
		edit.style.opacity = '1';

		document.getElementById('download').style.display = 'inline';
		document.getElementById('limeade-upload').style.display = 'inline';

	}, 200);

};

export default GenerateCIE;

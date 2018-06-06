/* globals $*/

import React from 'react';

const generateCIE = () => {
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
		

		

	setTimeout(function () {

		edit.style.paddingTop = '50px';
		edit.style.opacity = '1';

		document.getElementById('download').style.display = 'inline';
		document.getElementById('limeade-upload').style.display = 'inline';

	}, 200);

};

export default generateCIE;

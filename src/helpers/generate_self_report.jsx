/* globals $*/

import React from 'react';
import clean from './clean';

const generateSelfReport = () => {

	

	$('#preview').css('left', '1em');

	// TODO: Create React component for HtmlDescription
	$('#edit').css('opacity', '1');
	$('#edit').css('padding', '50px 10px 10px 10px');
	$('#edit').css('overflow', 'hidden');
	$('#edit').css('position', 'absolute');
	$('#edit').css('top', '540px');
	$('#edit').css('left', '550px');
	$('#edit').css('width', '440px');

	$('#titleInput').show();
	$('#upload').show();
	$('#jsonDetails').show();

	
  };

export default generateSelfReport;

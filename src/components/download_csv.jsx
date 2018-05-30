/* globals $*/

import React from 'react';
import CreateCSV from './create_csv';

export const DownloadCSV = (type) => {
  const data = CreateCSV(type);

	const employerName = $('#employer-name').val();
	const eventName = $('#title').html();

	let csvContent = '';
	data.forEach(function (infoArray, index) {
		let dataString = infoArray.join(',');
		csvContent += index < (data.length - 1) ? dataString + '\n' : dataString;
	});

	const file = encodeURI('data:text/csv;charset=utf-8,' + csvContent);

	let today = new Date;
	let currentYear = today.getFullYear();
	const filename = employerName.replace(/\s+/g, '') + '-CIE-' + eventName.replace(/\s+/g, '') + '-' + currentYear +'.csv';

	let link = document.createElement('a');
	link.setAttribute('download', filename);
	link.setAttribute('href', file);
	link.click();
};

export default DownloadCSV;

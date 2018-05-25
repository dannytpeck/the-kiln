/* globals $*/

export const clean = (dirtyText) => {
	// Gets rid of anything we don't want in the final HTML output
	const cleanText = dirtyText
		.replace(/\u00A9/g, '&copy;')
		.replace(/\u2013/g, '-')
		.replace(/\u2014/g, '-')
		.replace(/\u2019/g, '\'')
		.replace(/\u201C/g, '"')
		.replace(/\u201D/g, '"')
		.replace(/\t/g, '')
		.replace('rgb(255, 255, 255)', '#fff')
		.replace('rgb(255, 255, 255)', '#fff')
		.replace('rgb(228, 229, 231)', '#e4e5e7')
		.replace('rgb(61, 98, 116)', '#3d6274');

	return cleanText;
};

export const generateSelfReport = () => {
	const today = new Date();
	const date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

	const shortDescriptionHtml = $('#shortDescription').html();
	const htmlDescriptionHtml = $('#htmlDescription').html();

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

	const editHtml = `
		<h4>HTML Description</h4>
		<div id="codeContainer" style="border:2px solid grey; padding:5px; word-wrap:break-word">
			<textarea readonly id="htmlContent"><h2>Short Description</h2>
				<p></p>
				<div id="shD">
					<p style="font-weight: bold; font-size: 14px">${clean(shortDescriptionHtml)}</p>
				</div>
				<p></p>

				<h2>More Information</h2>
				<p></p>
				<div id="lnD">
					${clean(htmlDescriptionHtml)}
				</div>

				[code type=xhtml]
					${clean(htmlDescriptionHtml)}
				[/code]

				<h2>Challenge Details:</h2>
				Added: ${date}
				Last Updated: ${date}
				Suggested Dimensions: N/A

				<script> var imgHouse = document.getElementsByClassName(\'post-thumbnail\')[0]; var img = imgHouse.getElementsByTagName(\'img\')[0]; window.onload=function(){ console.log(img.src); var oSrc = img.src; var l = oSrc.length; var s = l-12; var x = s+8; var nSrc = oSrc.substring(0,s); var ext = oSrc.substring(x,l); img.src=nSrc+ext; }; </script>

				<script type="application/json"> { "defaults":{ "dimensions": [""], "imgUrl": "#", "team": "Team/Individual", "tracking": "One Time/One Time Days/One Time Units/Weekly Days/Weekly Units", "required": "0", "device": "yes/no", "text": "daily activity OR steps | exercise OR miles | exercise" } } </script> <!--end defaults-->
			</textarea>
		</div>
	`;

	$('#edit').html(editHtml.replace(/\t/g, ''));

  $('#jsonEdit').keyup((event) => {
    const codeHTML = `
			<textarea readonly id="htmlContent"><h2>Short Description</h2>
				<p></p>
				<div id="shD">
					<p style="font-weight: bold; font-size: 14px">${clean(shortDescriptionHtml)}</p>
				</div>
				<p></p>

				<h2>More Information</h2>
				<p></p>
				<div id="lnD">
					${clean(htmlDescriptionHtml)}
				</div>

				[code type=xhtml]
					${clean(htmlDescriptionHtml)}
				[/code]

				<h2>Challenge Details:</h2>
				Added: ${date}
				Last Updated: ${date}
				Suggested Dimensions: ${$('#jsonDimensions').val()}

				<script> var imgHouse = document.getElementsByClassName(\'post-thumbnail\')[0]; var img = imgHouse.getElementsByTagName(\'img\')[0]; window.onload=function(){ console.log(img.src); var oSrc = img.src; var l = oSrc.length; var s = l-12; var x = s+8; var nSrc = oSrc.substring(0,s); var ext = oSrc.substring(x,l); img.src=nSrc+ext; }; </script>

				<script type="application/json"> { "defaults":{ "dimensions": [${$('#jsonDimensions').val()}], "imgUrl": "${$('#jsonImageUrl').val()}", "team": "${$('#jsonTeam').val()}", "tracking": "${$('#jsonTracking').val()}", "required": "${$('#jsonRequired').val()}", "device": "${$('#jsonDevice').val()}", "text": "${$('#jsonText').val()}" } } </script> <!--end defaults-->
			</textarea>
		`;

    $('#codeContainer').html(codeHTML.replace(/\t/g, ''));

  });

};

export const generateCIE = () => {
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
			'<textarea readonly id="htmlContent">' +
				'<div style="font-size: 14px; line-height: 1.3em">' + clean(htmlDescription.innerHTML) + '</div>' +
			'</textarea>' +
		'</div>' +
		'</div>';

	setTimeout(function () {

		edit.style.paddingTop = '50px';
		edit.style.opacity = '1';

		document.getElementById('download').style.display = 'inline';
		document.getElementById('limeade-upload').style.display = 'inline';

	}, 200);

};


// Create a CSV for CIE uploads
export const createCSV = () => {
	let data = [[
		'EmployerName',
		'EventId',
		'EventName',
		'DisplayPriority',
		'RewardType',
		'PointsAwarded',
		'RewardDescription',
		'AllowSameDayDuplicates',
		'IsOngoing',
		'IsDisabled',
		'ShowInProgram',
		'IsSelfReport',
		'DataFeedMode',
		'Notify',
		'ButtonText',
		'TargetUrl',
		'EventImageUrl',
		'MaxOccurrences',
		'StartDate',
		'EndDate',
		'ViewPages',
		'Dimensions',
		'ShortDescription',
		'HtmlDescription',
		'SubgroupId',
		'Field1Name',
		'Field1Value',
		'Field2Name',
		'Field2Value',
		'Field3Name',
		'Field3Value'
	]];

	const eventName = $('#title').html();
	const htmlDescription = $('#htmlContent').html();

	const employerName = $('#employer-name').val();
	const eventId = $('#event-id').val();
	const pointsAwarded = $('#points-awarded').val();
	const eventImageUrl = $('#event-image-url').val();
	const maxOccurrences = '1';

	const subgroupID = $('#subgroup-id').val();
	const field1Name = $('#field-1-name').val();
	const field1Value = $('#field-1-value').val();
	const field2Name = $('#field-2-name').val();
	const field2Value = $('#field-2-value').val();
	const field3Name = $('#field-3-name').val();
	const field3Value = $('#field-3-value').val();

	const cie = [
		employerName,
		eventId,
		'"' + eventName + '"',
		'',
		'IncentivePoints',
		pointsAwarded,
		'',
		'0',
		'0',
		'0',
		'1',
		'0',
		'0',
		'0',
		'',
		'',
		eventImageUrl,
		maxOccurrences,
		'',
		'',
		'',
		'',
		'',
		'"' + clean(htmlDescription).replace(/"/g, '""') + '"',
		subgroupID,
		field1Name,
		field1Value,
		field2Name,
		field2Value,
		field3Name,
		field3Value
	];

	data.push(cie);

  return data;
};

export const downloadCSV = (type) => {
  const data = createCSV(type);

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

export const uploadToLimeade = (type) => {
  const csv = createCSV(type);
  const headers = csv[0].join(',');
  const url = 'http://mywellnessnumbers.sftp.adurolife.com/limeade-upload/';

  const oneIncentiveEvent = csv[1].join(',');

  const params = {
    e: $('#employer-name').val(),
    psk: $('#limeadePSK').val(),
    data: headers + '\n' + oneIncentiveEvent,
		type: 'IncentiveEvents'
  };

  // Open Modal
  $('#uploadModal').modal('show');
  $('#uploadModalBody').html('<p>Uploading...</p>');

  $.post(url, params).done(function(response) {
		$('#uploadModalBody').append(`<p>${response}</p>`);
    console.log(response);
  });

};

// function for showing and hiding targeting
// wasn't sure of where to put this file-wise
// also it uses an onclick
window.toggleTargeting = () => {
	if (document.getElementById('targeting-group').className === 'hidden') {
		document.getElementById('targeting-group').classList.add('visible');
		document.getElementById('targeting-group').classList.remove('hidden');
	} else {
		document.getElementById('targeting-group').classList.add('hidden');
		document.getElementById('targeting-group').classList.remove('visible');
	}
};

export const uploadToLibrary = () => {
	$.getJSON('http://thelibrary.adurolife.com/api/get_nonce/?controller=posts&method=create_post')
		.done(function (json) {
			var data = {
				nonce: json.nonce,
				status: 'publish',
				title: $('#titleInput').val(),
				content: $('#htmlContent').html()
			};

			// Open Modal
			$('#uploadModal').modal('show');
			$('#uploadModalBody').html('<p>Uploading...</p>');

			$.ajax({
				method: 'POST',
				url: 'http://thelibrary.adurolife.com/api/create_post/',
				data: data,
				success: function (response) {
					$('#uploadModalBody').append(`<p class="alert alert-success">Upload complete! Post can be found here: <a href="${response.post.url}" target="_blank">${response.post.url}</a></p>`);
					console.log(response.post.url);
				},
				fail: function (response) {
					$('#uploadModalBody').append(`<p class="alert alert-danger">Upload error! ${response}</p>`);
					console.log(response);
				}
			});
		});
};

/* globals $*/

import React from 'react';
import Airtable from 'airtable';

// TODO: Create function for posting content to airtable
const uploadToAirtable = () => {
	// Open Modal
	$('#uploadModal').modal('show');
	$('#uploadModalBody').html('<p>Uploading...</p>');

	const base = new Airtable({ apiKey: 'keyCxnlep0bgotSrX' }).base('appa7mnDuYdgwx2zP');
	
	base('Challenges').create({
		// todo: get short description only as Instructions
		// todo: get long description only as More Information Html
		// todo get Image uploaded properly
		'Title': $('#titleInput').val(),
		'Instructions': $('#htmlContent').html(),
		'More Information Html': $('#htmlContent').html(),
		'Category': $('#challengeCategory').val(),
		'Limeade Dimensions': $('#jsonDimensions').val(),
		'Limeade Image Url': $('#jsonImageUrl').val(),
		'Team Activity': $('#jsonTeamActivity').val(),
		'Reward Occurrence': $('#jsonRewardOccurrence').val(),
		'Activity Tracking Type': $('#jsonActivityTrackingType').val(),
		'Activity Goal': $('#jsonActivityGoal').val(),
		'Activity Goal Text': $('#jsonActivityGoalText').val(),
		'Device Enabled': $('#jsonDeviceEnabled').val(),
		'Device Units': $('#jsonDeviceUnits').val(),
		'Image': [
			{
				'url': "`https://d1dyf6uqjwvcrk.cloudfront.net$('#jsonImageUrl').val()`"
			}
    ]
	}, function(err, record) {
    if (err) {
				$('#uploadModalBody').append(`<p class='alert alert-danger'>Upload error! ${err}</p>`);
				console.log(err);
			}
			$('#uploadModalBody').append(`<p class='alert alert-success'>Upload complete! Post can be found here: <a href='https://calendarbuilder.dev.adurolife.com/titancoil/#/${record.getId()}' target='_blank'>https://calendarbuilder.dev.adurolife.com/titancoil/#/${record.getId()}</a></p>`);
			console.log(record.url);
			console.log(record.getId());
    });
};

export default uploadToAirtable;

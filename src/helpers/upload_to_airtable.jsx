/* globals $*/

import React from 'react';
import Airtable from 'airtable';

// TODO: Create function for posting content to airtable
const uploadToAirtable = () => {
	// Open Modal
	$('#uploadModal').modal('show');
	$('#uploadModalBody').html('<p>Uploading...</p>');

	const base = new Airtable({ apiKey: 'keyCxnlep0bgotSrX' }).base('appa7mnDuYdgwx2zP');

	// variables for the input data
	const title = $('#titleInput').val();
	const instructions = $('#instructionsHtml').html();
	const moreInformationHtml = $('#moreInformationHtml').html();
	const category = $('#challengeCategory').val();
	const limeadeDimensions = $('#jsonDimensions').val();
	const limeadeImageUrl = $('#jsonImageUrl').val();
	const teamActivity = $('#jsonTeamActivity').val();
	const rewardOccurrence = $('#jsonRewardOccurrence').val();
	const activityTrackingType = $('#jsonActivityTrackingType').val();
	const activityGoal = $('#jsonActivityGoal').val();
	const activityGoalText = $('#jsonActivityGoalText').val();
	const deviceEnabled = $('#jsonDeviceEnabled').val();
	const deviceUnits = $('#jsonDeviceUnits').val();
	const image = `https://d1dyf6uqjwvcrk.cloudfront.net${$('#jsonImageUrl').val()}`;
	
	base('Challenges').create({
		'Title': title,
		'Instructions': instructions,
		'More Information Html': moreInformationHtml,
		'Category': category,
		'Limeade Dimensions': limeadeDimensions,
		'Limeade Image Url': limeadeImageUrl,
		'Team Activity': teamActivity,
		'Reward Occurrence': rewardOccurrence,
		'Activity Tracking Type': activityTrackingType,
		'Activity Goal': activityGoal,
		'Activity Goal Text': activityGoalText,
		'Device Enabled': deviceEnabled,
		'Device Units': deviceUnits,
		'Image': [
			{
				'url': image
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

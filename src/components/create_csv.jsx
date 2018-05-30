/* globals $*/

import React from 'react';
import Clean from '../helpers';

// Create a CSV for CIE uploads
export const CreateCSV = () => {
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
		'"' + Clean(htmlDescription).replace(/"/g, '""') + '"',
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

export default CreateCSV;

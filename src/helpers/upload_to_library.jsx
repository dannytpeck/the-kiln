/* globals $*/

import React from 'react';

export const UploadToLibrary = () => {
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

export default UploadToLibrary;

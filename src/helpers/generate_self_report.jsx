/* globals $*/

import React from 'react';
import clean from './clean';

const generateSelfReport = () => {

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
			<xmp id="htmlContent"><h2>Short Description</h2>
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
			</xmp>
		</div>
	`;

	$('#edit').html(editHtml.replace(/\t/g, ''));

  $('#jsonEdit').keyup((event) => {
    console.log('keyup run');
    const codeHTML = `
			<xmp id="htmlContent"><h2>Short Description</h2>
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
			</xmp>
		`;

    $('#codeContainer').html(codeHTML.replace(/\t/g, ''));

  });

	};

export default generateSelfReport;

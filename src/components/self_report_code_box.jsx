/* globals $*/

import React from 'react';
import clean from '../helpers/clean';

// self-report code box

class SelfReportCodeBox extends React.Component {
  constructor(props) {
    super(props);
  }

  renderXmp() {
		const today = new Date();
		const date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

		const shortDescriptionHtml = $('#shortDescription').html();
		const htmlDescriptionHtml = $('#htmlDescription').html();

		const htmlText = 
`<h2>Short Description</h2>
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

<script type="application/json"> { "defaults":{ "dimensions": [${$('#jsonDimensions').val()}], "imgUrl": "${$('#jsonImageUrl').val()}", "team": "${$('#jsonTeam').val()}", "tracking": "${$('#jsonTracking').val()}", "required": "${$('#jsonRequired').val()}", "device": "${$('#jsonDevice').val()}", "text": "${$('#jsonText').val()}" } } </script> <!--end defaults-->`;

		return (
			<xmp id="htmlContent">
				{htmlText.replace(/<!-- \/?react-text:? \d*\s*-->/g, '')}
			</xmp>
		);
  }

	render() {
    const htmlDescription = document.getElementById('htmlDescription');


		return (
			<div id="html-description-section">
				<h4 id="html-description-label">HTML Description:</h4>
				<div id="code-box">
					{htmlDescription ? this.renderXmp() : ''}
				</div>
			</div>
		);
	}
}

export default SelfReportCodeBox;

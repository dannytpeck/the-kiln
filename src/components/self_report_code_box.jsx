/* globals $*/

import React from 'react';
import clean from '../helpers/clean';

// self-report code box

class SelfReportCodeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shortDescriptionHtml: this.props.shortDescriptionHtml };
    this.state = { htmlDescriptionHtml: this.props.htmlDescriptionHtml };
  }

  renderXmp() {
		const today = new Date();
		const date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

		let shortDescriptionHtml = '';
		if ($('#shortDescription').html()) {
			shortDescriptionHtml = $('#shortDescription').html();
		}
		
		let htmlDescriptionHtml = '';
		if ($('#htmlDescription').html()) {
			htmlDescriptionHtml = $('#htmlDescription').html();
		}

		const htmlText = 
`<h2>Short Description</h2>
<div id="shD">
<p style="font-weight: bold; font-size: 14px">${clean(shortDescriptionHtml)}</p>
</div>

<h2>More Information</h2>
<div id="lnD">
${clean(htmlDescriptionHtml)}
</div>`;

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

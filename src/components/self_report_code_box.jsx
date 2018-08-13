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

		const shortText =
`<p style="font-weight: bold; font-size: 14px">${clean(shortDescriptionHtml)}</p>`;

		const longText =
`${clean(htmlDescriptionHtml)}`;

		return (
			<div id="code-box">
				<h5>Short Description</h5>
				<xmp id="instructionsHtml">
					{shortText}
				</xmp>

				<h5>Long Description</h5>
				<xmp id="moreInformationHtml">
					{longText.replace(/<!-- \/?react-text:? \d*\s*-->/g, '')}
				</xmp>
			</div>
		);
  }

	render() {
    const shortDescription = document.getElementById('shortDescription');
    const htmlDescription = document.getElementById('htmlDescription');


		return (
			<div id="html-description-section">
				<h4 id="html-description-label">HTML Description:</h4>
					{htmlDescription ? this.renderXmp() : ''}
			</div>
		);
	}
}

export default SelfReportCodeBox;

import React, { Component } from 'react';
import clean from '../helpers/clean';

/* globals $*/
class HtmlCodeBox extends Component {
  constructor(props) {
    super(props);
  }

  renderXmp() {
		const shortDescriptionHtml = $('#shortDescription').html();
		const moreDescriptionHtml = $('#htmlDescription').html();

		const shortText = shortDescriptionHtml ? `${clean(shortDescriptionHtml)}` :
      this.props.shortDescriptionHtml;
		const longText = moreDescriptionHtml ? `${clean(moreDescriptionHtml)}` :
      this.props.moreDescriptionHtml;

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
    const htmlDescription = document.getElementById('htmlDescription');

		return (
			<div id="html-description-section">
				<h4 id="html-description-label">HTML Description:</h4>
					{this.renderXmp()}
			</div>
		);
	}
}

export default HtmlCodeBox;

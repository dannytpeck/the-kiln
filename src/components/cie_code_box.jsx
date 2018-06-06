import React from 'react';
import clean from '../helpers/clean';

class CieCodeBox extends React.Component {
  constructor(props) {
    super(props);
  }

  renderXmp() {
		const htmlDescription = document.getElementById('htmlDescription');

		const htmlText = `<div style="font-size: 14px;">${clean(htmlDescription.innerHTML)}</div>`;

		return (
			<xmp id="htmlContent">
				{htmlText.replace(/<!-- \/?react-text:? \d*\s*-->/g, '')}
			</xmp>
		);
  }

	render() {
    // switch () {
    //   case '':
    //     // self-report
    //     break;
    //   case 'Custom CIE':
    //     // CIE
    //     break;
    // }

    const htmlDescription = document.getElementById('htmlDescription');


		return (
			<div className="col-md-12" id="html-description-section">
				<h4 id="html-description-label">HTML Description:</h4>
				<div id="code-box">
					{htmlDescription ? this.renderXmp() : ''}
				</div>
			</div>
		);
	}
}

export default CieCodeBox;

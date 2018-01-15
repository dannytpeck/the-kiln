import React from 'react';
import { generateSelfReport, generateCIE } from '../helpers/';

class GenerateCode extends React.Component {
	handleClick() {
		document.getElementById('edit').style.opacity = '0';
    switch (this.props.type) {
      case 'selfreport':
        setTimeout(generateSelfReport, 550);
        break;
      case 'cie':
        setTimeout(generateCIE, 550);
        break;
    }
	}

	render() {
		return (
			<button className="btn btn-primary" id="generateCode" onClick={this.handleClick.bind(this)}>Generate Code</button>
		);
	}
}

export default GenerateCode;

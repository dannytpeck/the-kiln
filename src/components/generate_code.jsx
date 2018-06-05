import React from 'react';
import GenerateCIE from '../helpers/generate_cie';
import GenerateSelfReport from '../helpers/generate_self_report';

class GenerateCode extends React.Component {
	handleClick() {
		document.getElementById('edit').style.opacity = '0';
    switch (this.props.type) {
      case 'selfreport':
        setTimeout(GenerateSelfReport, 550);
        break;
      case 'cie':
        setTimeout(GenerateCIE, 550);
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

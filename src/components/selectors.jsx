import React from 'react';
import SelectChallengeType from './select_challenge_type';
import SelectProject from './select_project';

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: '' };
  }

	handleChangeProject(event) {
		this.setState({ project: event.target.value });
	}
  
	render() {
		var project = '';
    
    switch (this.state.project) {
      case 'Challenges':
        project = <SelectChallengeType onChange={this.props.onChange} />;
        break;
    }

		return (
			<div>
				<SelectProject onChange={this.handleChangeProject.bind(this)} />
				{project}
			</div>
		);
	}
}

export default Selectors;

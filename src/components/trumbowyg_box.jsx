/* global $ */
import React from 'react';
import cleanPastedHTML from '../helpers/clean_pasted_html';

class TrumbowygBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: this.props.characters };
  }

	handleKeyUp(event) {
		var characterLength = event.target.innerHTML.length;
		this.setState({ characters: this.props.characters - characterLength });
		$('#' + this.props.name).html($('#' + this.props.name + 'Edit').html());
	}

	componentDidMount() {
		$('#' + this.props.name + 'Edit').trumbowyg()
    .on('tbwpaste', (event) => {
      event.target.innerHTML = cleanPastedHTML(event.target.innerHTML);
    });

		$('.trumbowyg-button-pane').click(() => {
			$('#' + this.props.name).html($('#' + this.props.name + 'Edit').html());
		});
	}

	render() {
		var textColor = this.state.characters < 0 ? 'red' : 'inherit';

		return (
			<div className="trumbowyg-container">
				<p className="trumbowyg-title">{this.props.title}</p>
				<div id={this.props.name + 'Edit'} onKeyUp={this.handleKeyUp.bind(this)}></div>
				<p id={this.props.name + 'Limit'} style={{ color: textColor }}>{this.state.characters} characters remaining</p>
			</div>
		);
	}
}

export default TrumbowygBox;

import React from 'react';

class EditBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: this.props.characters };
  }

	handleKeyUp(event) {
		var characterLength = event.target.value.length;
		this.setState({ characters: this.props.characters - characterLength });
	}

  /* global $ */
  handlePaste(event) {
    const plainText = event.clipboardData.getData('text/plain');
    $('#' + this.props.name).html(plainText);
  }

	render() {
		var textColor = 'inherit';
		if (this.state.characters < 0) {
			textColor = 'red';
		}
		return (
			<div>
				<p>{this.props.title}<br/><textarea id={this.props.name + 'Edit'} onPaste={this.handlePaste.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} rows={1 + this.props.characters / 250} cols="50"></textarea></p>
				<p id={this.props.name + 'Limit'} style={{ color: textColor }}>{this.state.characters} characters remaining</p>
			</div>
		);
	}
}

export default EditBox;

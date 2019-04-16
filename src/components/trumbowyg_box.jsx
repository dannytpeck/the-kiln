/* global $ */
import React from 'react';
import cleanPastedHTML from '../helpers/clean_pasted_html';

class TrumbowygBox extends React.Component {
  constructor(props) {
    super(props);
  }

	handleKeyUp(event) {
		$('#' + this.props.name).html($('#' + this.props.name + 'Edit').html());
	}

	componentDidMount() {
		$('#' + this.props.name + 'Edit').trumbowyg(
			{ btns:
				[
				['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        ['foreColor', 'backColor'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat']
				] }
			).on('tbwpaste', (event) => {
      event.target.innerHTML = cleanPastedHTML(event.target.innerHTML);
    });

		$('.trumbowyg-button-pane').click(() => {
			$('#' + this.props.name).html($('#' + this.props.name + 'Edit').html());
		});
	}

	render() {
		return (
			<div className="trumbowyg-container">
				<label htmlFor={this.props.name + 'Edit'}>{this.props.title}</label>
				<div id={this.props.name + 'Edit'} onKeyUp={this.handleKeyUp.bind(this)}></div>
			</div>
		);
	}
}

export default TrumbowygBox;

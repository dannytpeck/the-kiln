/* globals $ */
import React, { Component } from 'react';
import Resource from './resource.jsx';

class Resources extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 2,
			resources: [
				{ id: 0, url: '', linkText: '' },
				{ id: 1, url: '', linkText: '' }
			]
		};
	}

	updateResourceText(event, id, property) {
		switch (property) {
			case 'url':
				this.setState({
					resources: this.state.resources.map((resource) => {
						if (resource.id === id) {
							return { ...resource, url: event.target.value };
						}
						return resource;
					})
				});
				break;

			case 'linkText':
				this.setState({
					resources: this.state.resources.map((resource) => {
						if (resource.id === id) {
							return { ...resource, linkText: event.target.value };
						}
						return resource;
					})
				});
				break;
		}
	}

	generateHTML() {
		let html = '';
		this.state.resources.map(resource => {
			html += `<li><a href=${resource.url} target="_blank">${resource.linkText}</a>.</li>`;
		});
		$('#resources ul').html(html);
	}

  removeAllResourcesClick() {
    $('#resources').remove();
		$('.resources-container').remove();
  }

	addResourceClick() {
		this.setState({
			resources: [...this.state.resources, { id: this.state.count, url: '', linkText: '' }],
			count: this.state.count + 1
		});
	}

	deleteResourceClick(number) {
		this.setState({
			resources: this.state.resources.filter(resource => resource.id !== number)
		});
	}

	renderResources() {
		this.generateHTML();
		return this.state.resources.map((resource) => {
			return <Resource key={resource.id} number={resource.id} onClick={this.deleteResourceClick.bind(this)} onKeyUp={this.updateResourceText.bind(this)} />;
		});
	}

  render() {
    return (
      <div className="resources-container">
        <h4>Additional Resources</h4>
        <button id="removeResourcesButton" className="btn btn-default remove-button" onClick={this.removeAllResourcesClick}>Remove Resources</button>
        {this.renderResources()}
        <button className="add-button" onClick={this.addResourceClick.bind(this)}>
					<img id="addNewResource" src="./images/icon-add.png"/>
					<span className="add-more-resources">Add more resources</span>
				</button>
      </div>
    );
  }
}

export default Resources;

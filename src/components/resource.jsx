/* globals $ */
import React, { Component } from 'react';

class Resource extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="row">
				<div className="col-md-5">
					<span>URL</span><br/>
					<input id="resourceUrl" type="text" onKeyUp={(event) => this.props.onKeyUp(event, this.props.number, 'url')} />
				</div>
				<div className="col-md-5">
					<span>Link Text</span><br/>
					<input id="resourceText" type="text" onKeyUp={(event) => this.props.onKeyUp(event, this.props.number, 'linkText')} />
				</div>
				<div className="col-md-1">
					<button className="delete-resource" onClick={() => this.props.onClick(this.props.number)}>
						<img id="deleteResource" src="./images/icon-delete.png"/>
					</button>
				</div>
      </div>
    );
  }
}

export default Resource;

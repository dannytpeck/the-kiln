/* globals $ */
import React, { Component } from 'react';
import ChangeCoachingMessage from './change_coaching_message';

class Coaching extends Component {

  removeCoachingClick() {
    $('#coaching').remove();
		$('.coachinginfo').remove();
  }


  render() {
    return (
      <div id="coaching">
        <h5>Coaching</h5>
        <button id="removeCoachingButton" className="btn btn-outline-danger remove-button" onClick={this.removeCoachingClick}>Remove Coaching</button>
        <ChangeCoachingMessage />
      </div>
    );
  }
}

export default Coaching;

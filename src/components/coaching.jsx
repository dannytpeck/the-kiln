/* globals $ */
import React, { Component } from 'react';
import ChangeCoachingMessage from './change_coaching_message';

class Coaching extends Component {

  removeCoachingClick() {
    $('.coaching-container').remove();
		$('.coachinginfo').remove();
  }


  render() {
    return (
      <div className="coaching-container">
        <h4>Coaching</h4>
        <button id="removeCoachingButton" className="btn btn-default remove-button" onClick={this.removeCoachingClick}>Remove Coaching</button>
        <ChangeCoachingMessage />
      </div>
    );
  }
}

export default Coaching;

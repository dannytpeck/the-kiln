import React from 'react';

import Header from './header';
import Editor from './editor';
import Preview from './preview';
import UploadModal from './upload_modal';

class Kiln extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shortDescription: 'Using the Sleep Journal provided for you, create awareness of your overall sleep by tracking your sleep patterns and habits at least 5 days each week.',
      tagline: 'TRACK YOUR ZZZZZZZZZS',
      moreInformation: '<p>When you reflect on your  daily energy level, does sleep impact it? How would you rate your overall  sleep? What are the areas of sleep you struggle with? What elements of your  life or health are affected by your sleep?</p>    <p>Poor sleep is linked to several health risks, including diabetes, obesity, cancer and chronic fatigue. One of the most valuable ways to build awareness of your overall sleep is to actively record or track your sleep in as much detail as you can. Use the <a href="https://mywellnessnumbers.com/tipsheets/2016/sleep-journal.pdf" target="_blank">Sleep Journal</a> attached to create awareness and enable action to improve your sleep.</p>',
      resourceLink: '#',
      resourceText: 'An interesting resource',
      resources: '<li><a href="#" target="_blank">An interesting resource</a>.</li><li><a href="#" target="_blank">An interesting resource</a>.</li>'
    };
  }

	render() {
		return (
			<div className="row">
        <div className="col-5">
          <Header />
          <Editor />
        </div>
        <div className="col-6 offset-md-1">
          <Preview
          shortDescription={this.state.shortDescription}
          tagline={this.state.tagline}
          moreInformation={this.state.moreInformation}
          resources={this.state.resources} />
        </div>
				<UploadModal />
			</div>
		);
	}
}

export default Kiln;

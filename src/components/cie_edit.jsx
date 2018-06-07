import React from 'react';
import EditBox from './edit_box';
import TrumbowygBox from './trumbowyg_box';

const CieEdit = ({ onKeyUp }) => {
  return (
    <div id="edit" onKeyUp={onKeyUp}>
      <EditBox name="title" title="Title" characters="100" />
      <TrumbowygBox name="description" title="Description (HTML)" characters="2000" />
    </div>
  );
};

export default CieEdit;

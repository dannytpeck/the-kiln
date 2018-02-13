import React from 'react';
import CategorySelect from './category_select';
import EditBox from './edit_box';
import TrumbowygBox from './trumbowyg_box';
import GenerateCode from './generate_code';

const CieEdit = ({ onKeyUp }) => {
  return (
    <div id="edit" onKeyUp={onKeyUp}>
      <CategorySelect />
      <EditBox name="title" title="Title" characters="100" />
      <TrumbowygBox name="description" title="Description (HTML)" characters="2000" />
      <GenerateCode type="cie" />
    </div>
  );
};

export default CieEdit;
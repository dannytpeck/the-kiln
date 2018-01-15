import React from 'react';

const CiePreview = ({ title, description }) => {
  return (
    <div id="preview">
      <h3 id="title">{title}</h3>
      <div id="htmlDescription">
        <div id="description"><p dangerouslySetInnerHTML={{ __html: description }}></p></div>
        <p style={{ fontSize: '9px' }}>
          <span>&#169; Copyright 2017 </span>
          <a style={{ textDecoration: 'none' }} href="http://www.adurolife.com" target="_blank">ADURO, INC.</a>
          <span> All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default CiePreview;

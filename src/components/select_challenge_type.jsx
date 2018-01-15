import React from 'react';

const SelectChallengeType = ({ onChange }) => {
  return (
    <select id="select-type" onChange={onChange}>
      <option>--Select Challenge Type--</option>
      <option>Custom Self-Report</option>
      <option>Custom CIE</option>
    </select>
  );
};

export default SelectChallengeType;

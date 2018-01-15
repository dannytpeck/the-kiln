import React from 'react';

const SelectProject = ({ onChange }) => {
	return (
    <select id="select-project" onChange={onChange}>
      <option>--Select Project--</option>
      <option>Challenges</option>
    </select>
  );
};

export default SelectProject;

// SkillList.js
import React from 'react';

const SkillList = ({ list, handleRemove }) => {
  return (
    <ul>
      {list.map((skill, index) => (
        <li key={index} id={`skill-number-${index}`} onClick={() => handleRemove(index)}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;

// UseCallbackComp.js
import React, { useState, useCallback } from 'react';
import SkillList from './SkillList';

const UseCallbackComp = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const handleAdd = useCallback(() => {
    if (inputValue.trim() !== '') {
      setList([...list, inputValue]);
      setInputValue('');
    }
  }, [list, inputValue]);

  const handleRemove = useCallback((index) => {
    const updatedList = list.filter((_, idx) => idx !== index);
    setList(updatedList);
  }, [list]);

  return (
    <div>
      <h1 id="heading">List</h1>
      <form>
      <input id="skill-input" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <button id="skill-add-btn" onClick={handleAdd}>Add Skill</button>
      </form>
      <SkillList list={list} handleRemove={handleRemove} />
    </div>
  );
};

export default UseCallbackComp;

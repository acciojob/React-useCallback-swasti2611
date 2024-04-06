import React, { useCallback, useState } from 'react'
import SkillList from './SkillList'

const UseCallbackComp = () => {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    
    
    const handleAdd=useCallback(()=>{
        if (inputValue.trim() !== '') {
            setList([...list, { name: inputValue }]);
            setInputValue('');
            console.log("handleAdd")
        }
    },[list,inputValue])

    const handleRemove = useCallback((id) => {
        const updatedList = list.filter((_, index) => id !== index);
        setList(updatedList);
        console.log("remove");
    }, [list]);
    

    return (
        <div>
            <h1 id="heading">List</h1>
            <input id="skill-input" type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <button id="skill-add-btn" onClick={handleAdd}>Add list</button>
            <SkillList list={list} handleRemove={handleRemove} />
        </div>
    )
}

export default UseCallbackComp

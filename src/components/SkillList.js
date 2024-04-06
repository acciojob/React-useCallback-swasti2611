import React from 'react'

const SkillList = ({list,handleRemove}) => {
    
  return (
    <div>
      <ul>
    {list.map((item,index)=>(
        <div>
            <li>{item.name}</li>
            <button onClick={() => handleRemove(index)}>remove</button>
        </div>
    ))}
      </ul>
    </div>
  )
}

export default SkillList

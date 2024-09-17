import React from 'react'

const InputField = ({handelChange, value, title, name}) => {
  return (
    <label className='sidebar-label-container'>
      <input type="radio" name={name} id='test' value={value} onChange={handelChange}/>
      <span className='checkmark'></span>{title}
    </label>
  );
};

export default InputField